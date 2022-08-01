import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Marcio Almeida',
  authorAddress: 'marciocadev@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'lb-sls',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/marciocadev/lb-sls.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();