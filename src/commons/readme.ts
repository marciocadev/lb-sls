import { existsSync, readFileSync } from 'fs';
import { Project, SourceCode } from 'projen';

export function readmeFile(name: string): string {
  if (existsSync('README.md')) {
    return readFileSync('README.md', { encoding: 'utf-8' });
  }

  const readme = [
    `# ${name}`,
    '',
    '<!-- <macro exec="node ./scripts/readme-projects.js"> -->',
    '<!-- </macro> -->',
    '',
    '## Comandos',
    '',
    '* **sls package** - cria o pacote serverless',
    '* **sls deploy** - faz o deploy da stack na AWS',
    '* **sls remove** - remove a stack da AWS',
    '* **projen** - atualiza o projeto de acordo com a configuração do .projenrc.ts',
  ].join('\n');

  return readme;
}

export function readmeScript(project: Project) {
  const code = new SourceCode(project, 'scripts/readme-projects.js', {
    indent: 2,
  });

  code.line('var fs = require(\'fs\');');

  code.open('if (fs.existsSync(\'./src\') && fs.existsSync(\'./src/lambdas\')) {');

  code.line('var lambdaDir = fs.readdirSync(\'./src/lambdas\');');

  code.line('const slsFile = fs.readFileSync(\'./serverless.yml\', {encoding: \'utf8\'});');
  code.line('const splitSlsFile = slsFile.split(/\\r?\\n/);');
  code.line('let service = \'\'');
  code.open('for (var serviceLine of splitSlsFile) {');
  code.line('var pos = serviceLine.search(\'service: \');');
  code.open('if (pos > -1) {');
  code.line('service = serviceLine.substring(pos + 8).trim();');
  code.line('console.log(\'## CloudFormation\');');
  code.line('console.log(\'\');');
  code.line('console.log(\'* \' + service + \'-{stage}\');');
  code.line('console.log(\'\');');
  code.close('}');
  code.close('}');

  code.line('console.log(\'## Lambdas\');');
  code.line('console.log(\'\');');
  code.open('for (var dir of lambdaDir) {');
  code.line('console.log(\'### \', \'{stage}-\' + service + \'-\' + dir);');
  code.line('console.log(\'\');');
  code.line('const configFile = \'./src/lambdas/\' + dir + \'/config.yml\';');
  code.line('const config = fs.readFileSync(configFile, {encoding: \'utf8\'});');
  code.open('if (config.search(\'http:\')) {');
  code.line('const splitFile = config.split(/\\r?\\n/);');
  code.open('for (var methodLine of splitFile) {');
  code.line('var pos = methodLine.search(\'method:\');');
  code.open('if (pos > -1) {');
  code.line('var method = methodLine.substring(pos + 7);');
  code.line('console.log(\'* Method: \', method);');
  code.close('}');
  code.close('}');
  code.open('for (var pathLine of splitFile) {');
  code.line('var pos = pathLine.search(\'path: \');');
  code.open('if (pos > -1) {');
  code.line('var path = pathLine.substring(pos + 5);');
  code.line('console.log(\'* Path: \', path);');
  code.line('console.log(\'\');');
  code.close('}');
  code.close('}');

  code.open('if (fs.existsSync(`./src/lambdas/${dir}/payload.json`)) {');
  code.line('console.log(\'__Exemplo de payload__\');');
  code.line('console.log(\'```json\');');
  code.line('const payload = fs.readFileSync(`./src/lambdas/${dir}/payload.json`, {encoding: \'utf8\'});');
  code.line('const payloadSplit = payload.split(/\\r?\\n/);');
  code.open('for (const line of payloadSplit) {');
  code.line('console.log(line);');
  code.close('}');
  code.line('console.log(\'```\');');
  code.close('}');
  code.close('}');
  code.close('}');
  code.close('}');
  //code.line('console.log(\'\');');
}