import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Marcio Almeida',
  authorAddress: 'marciocadev@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'lb-sls',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/marciocadev/lb-sls.git',

  majorVersion: 2,

  release: true,
  publishTasks: true,
  deps: ['projen'],
  peerDeps: ['projen'],
  bundledDeps: ['markmac'],
});
project.synth();