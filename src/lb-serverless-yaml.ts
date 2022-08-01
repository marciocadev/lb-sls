import { Project, TextFile } from 'projen';

export function serverless(project: Project) {
  const yaml = [
    `service: ${project.name}`,
    'frameworkVersion: \'3\'',
    'configValidatorMode: error',
    '',
    'provider:',
    '  name: aws',
    '  runtime: nodejs14.x',
    '  stage: \${opt:stage, \'dev\'}',
    '  region: \${opt:region, \'us-east-2\'}',
    '',
    'custom:',
    '  esbuild:',
    '    bundle: true',
    '    minify: true',
    '',
    'plugins:',
    '  - serverless-esbuild',
    '',
  ];

  new TextFile(project, 'serverless.yml', {
    readonly: false,
    marker: false,
    committed: true,
    lines: yaml,
  });
}