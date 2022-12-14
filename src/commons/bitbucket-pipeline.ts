import { Project, TextFile } from 'projen';

export function bitbucketPipeline(project: Project) {
  const data = [
    'definitions: ',
    '  steps:',
    '    - step: &sec-scan',
    '        name: Security Scan',
    '        script:',
    '          - pipe: atlassian/git-secrets-scan:0.5.1',
    '    - step: &npm-test',
    '        name: Validate',
    '        image: node:12',
    '        caches:',
    '            - node',
    '        script:',
    '            - NODE_ENV=dev npm install --unsafe-perm',
    '            - npm test --if-present',
    '    - step: &npm-install',
    '        name: Build',
    '        image: node:12',
    '        caches:',
    '            - node',
    '        script:',
    '            - NODE_ENV=production npm install --unsafe-perm',
    '        artifacts:',
    '            - node_modules/**',
    '    - step: &sls-deploy',
    '        name: Serverless Deploy',
    '        script:',
    '          - pipe: docker://bancosmartbank/bitbucket-pipe-serverless-deploy:1.0.0.9',
    '            variables:',
    '              AWS_ACCESS_KEY_ID: $AWS_ACCESS_KEY_ID',
    '              AWS_SECRET_ACCESS_KEY: $AWS_SECRET_ACCESS_KEY',
    '              AWS_REGION: $AWS_REGION',
    '              EXTRA_ARGS: "--stage $BITBUCKET_DEPLOYMENT_ENVIRONMENT --env $ENV --region $AWS_REGION --force"',
    '              DEBUG: "true"',
    '    - step: &tag',
    '        name: Tag version',
    '        script:',
    '          - echo "Tag gerada a partir do build ${BITBUCKET_BUILD_NUMBER}" >> changes.txt',
    '          - git add changes.txt',
    '          - git commit -m "Promovendo o build ${BITBUCKET_BUILD_NUMBER}"',
    '          - git tag -am "Release ${BITBUCKET_BUILD_NUMBER}" release-${BITBUCKET_BUILD_NUMBER}',
    '          - git push origin release-${BITBUCKET_BUILD_NUMBER}',
    '',
    'pipelines:',
    '  branches:',
    '',
    '    feature/*:',
    '      - step: *sec-scan',
    '      - step: *npm-test',
    '      - step: *npm-install',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Test',
    '          deployment: dev',
    '',
    '    develop:',
    '      - step: *sec-scan',
    '      - step: *npm-test',
    '      - step: *npm-install',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Test',
    '          deployment: dev',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Stage',
    '          deployment: hmg',
    '          trigger: manual',
    '      - step: ',
    '          <<: *tag',
    '          trigger: manual',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Production',
    '          deployment: prd',
    '          trigger: manual',
    '',
    '    release/*:',
    '      - step: *sec-scan',
    '      - step: *npm-test',
    '      - step: *npm-install',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Stage',
    '          deployment: hmg',
    '          trigger: manual',
    '      - step: ',
    '          <<: *tag',
    '          trigger: manual',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Production',
    '          deployment: prd',
    '          trigger: manual',
    '',
    '    hotfix/*:',
    '      - step: *sec-scan',
    '      - step: *npm-test',
    '      - step: *npm-install',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Test',
    '          deployment: dev',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Stage',
    '          deployment: hmg',
    '          trigger: manual',
    '      - step: ',
    '          <<: *tag',
    '          trigger: manual',
    '      - step: ',
    '          <<: *sls-deploy',
    '          name: Production',
    '          deployment: prd',
    '          trigger: manual',
  ];

  new TextFile(project, 'bitbucket-pipelines.yml', {
    marker: false,
    readonly: false,
    committed: true,
    lines: data,
  });
}
