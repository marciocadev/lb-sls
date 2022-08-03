import { existsSync, readFileSync, writeFileSync } from 'fs';
import { Project, SourceCode, TextFile } from 'projen';
import { convertFunctionName } from '../functions';

export interface HttpLambdaProps {
  /**
   * Nome do lambda
   */
  readonly name: string;
  /**
   * Habilita a vpc
   *
   * @default false
   */
  readonly vpc?: boolean;
}

export class HttpFunction {
  public readonly name: string;
  public readonly path: string;
  public readonly vpc?: boolean;

  constructor(props: HttpLambdaProps) {
    this.name = props.name;
    this.vpc = props.vpc;
    this.path = `src/lambdas/${props.name}`;
  }

  public configYaml(project: Project) {
    if (existsSync(`${this.path}/config.yml`)) {
      console.warn(`👎 \x1b[4m\x1b[31mbuild >> config.yml\x1b[0m | a configuração do lambda \x1b[1m\x1b[33m${this.name}\x1b[0m já foi criada`);
      return;
    }
    console.log(`👾 \x1b[4mbuild >> config.yml\x1b[0m | criando a configurando do lambda \x1b[1m\x1b[33m${this.name}\x1b[0m`);

    let fileContent = [
      `${convertFunctionName(this.name)}:`,
      `  name: \${self:provider.stage}-\${self:service}-${this.name}`,
      `  handler: ${this.path}/index.handler`,
      '',
    ];

    if (this.vpc) {
      let vpcContent = [
        '  vpc:',
        '    securityGroupId:',
        '      - ${cf:${self:provider.stage}-network.LambdaSecurityGroup}',
        '    subnetIds:',
        '      - ${cf:${self:provider.stage}-network.PrivateSubnetA}',
        '      - ${cf:${self:provider.stage}-network.PrivateSubnetB}',
      ].join('\n');
      fileContent = fileContent.concat(vpcContent);
    }

    new TextFile(project, `${this.path}/config.yml`, {
      marker: false,
      readonly: false,
      committed: true,
      lines: fileContent,
    });
    console.log(`🏆 \x1b[4m\x1b[33mbuild >> config.yml\x1b[0m | a configuração do lambda \x1b[1m\x1b[33m${this.name}\x1b[0m foi criada com sucesso`);
  }

  public sampleCode(project: Project) {
    if (existsSync(`${this.path}/index.ts`)) {
      console.warn(`👎 \x1b[4m\x1b[31mbuild >> index.ts\x1b[0m | o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m já foi criado`);
      return;
    }
    console.log(`👾 \x1b[4mbuild >> index.ts\x1b[0m | criando o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m`);
    const code = new SourceCode(project, `${this.path}/index.ts`, {
      readonly: false,
      indent: 2,
    });

    code.line('import { APIGatewayProxyEvent, Context, APIGatewayProxyEventPathParameters, APIGatewayProxyEventQueryStringParameters } from \'aws-lambda\';');
    code.line('import { Logger } from \'@aws-lambda-powertools/logger\';');
    code.line('');
    code.line(`const logger = new Logger({ logLevel: \'INFO\', serviceName: \'${project.name}\' });`);
    code.line('');
    code.open('export const handler = async(event: APIGatewayProxyEvent, context: Context) => {');
    code.line('logger.addContext(context);');
    code.line('const body = JSON.parse(event.body ?? \'\');');
    code.line('');
    code.line('// log examples with API Gateway data');
    code.line('logger.info(\'body\', body);');
    code.line('logger.warn(\'Header\', event.headers);');
    code.line('logger.debug(\'path parameters\', event.pathParameters as APIGatewayProxyEventPathParameters);');
    code.line('logger.error(\'query parameters\', event.queryStringParameters as APIGatewayProxyEventQueryStringParameters);');
    code.line('');
    code.line('// some code here');
    code.line('');
    code.open('return {');
    code.line('statusCode: 200,');
    code.line('body: JSON.stringify(body, undefined, 2)');
    code.close('}');
    code.close('}');

    console.log(`🏆 \x1b[4m\x1b[33mbuild >> index.ts\x1b[0m | o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m foi criado com sucesso`);
  }

  public appendLambdaToServerlessYaml() {
    const data = readFileSync('serverless.yml');
    if (data.indexOf(`- \${file(${this.path}/config.yml)}`) > -1) {
      console.warn(`👎 \x1b[4m\x1b[31mupdate >> serverless.yml\x1b[0m | o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m já foi inserido no serverless.yml`);
      // console.error('💀 \x1b[4m\x1b[31merror\x1b[0m | lambda já inserido no serverless.yml');
      return;
    }
    console.log(`👉 \x1b[4mupdate >> serverless.yml\x1b[0m | inserindo o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m no serverless.yml`);
    let initialData, middleData, finalData;
    const posFunctions = data.indexOf('functions:');
    if (posFunctions > -1) {
      const pos = posFunctions + 'functions:'.length;
      initialData = [data.slice(0, pos)].join('');
      middleData = `  - \${file(${this.path}/config.yml)}`;
      finalData = [data.slice(pos+1)].join('');
    } else {
      initialData = [data.slice(0, data.length)].join('');
      middleData = 'functions:';
      finalData = `  - \${file(${this.path}/config.yml)}`;
    }
    const newData = [initialData, middleData, finalData].join('\n');
    writeFileSync('serverless.yml', newData);
    console.log(`🏆 \x1b[4m\x1b[33mupdate >> serverless.yml\x1b[0m | lambda \x1b[1m\x1b[33m${this.name}\x1b[0m inserido com sucesso`);
  }
}