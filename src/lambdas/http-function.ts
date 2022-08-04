import { existsSync, readFileSync, writeFileSync } from 'fs';
import { JsonFile, Project, SourceCode, TextFile } from 'projen';
import { convertFunctionName, objectToSchema } from '../commons';
import { Function, FunctionProps } from './function';

export enum HttpMethodType {
  GET, POST, PUT, DELETE, PATCH
}

export interface HttpLambdaProps extends FunctionProps {
  readonly methodPath: string;
  readonly httpMethodType: HttpMethodType;
  /**
   * Habilita a vpc
   *
   * @default false
   */
  readonly vpc?: boolean;
  readonly schemaObject?: {[key: string]: any};
  readonly requiredKeys?: string[];
}

export class HttpFunction extends Function {
  public readonly methodPath: string;
  public readonly httpMethodType: HttpMethodType;
  public readonly vpc?: boolean;
  public readonly schemaObject?: {[key: string]: any};
  readonly requiredKeys?: string[];

  constructor(props: HttpLambdaProps) {
    super(props);
    this.methodPath = props.methodPath;
    this.httpMethodType = props.httpMethodType;
    this.vpc = props.vpc;
    this.schemaObject = props.schemaObject;
    this.requiredKeys = props.requiredKeys;
  }

  schemaJson(project: Project) {
    let schema: {[key:string]: any} = {};
    schema = objectToSchema(this.schemaObject as {[key:string]: any});
    schema.schema = 'http://json-schema.org/draft-04/schema#';
    if (this.requiredKeys) {
      schema.required = this.requiredKeys;
    }
    new JsonFile(project, `${this.path}/schema.json`, {
      marker: false,
      readonly: false,
      committed: true,
      obj: schema,
    });
  }

  public configYaml(project: Project) {
    if (existsSync(`${this.path}/config.yml`)) {
      console.warn(`🚫 \x1b[4m\x1b[31mbuild >> config.yml\x1b[0m | a configuração do lambda \x1b[1m\x1b[33m${this.name}\x1b[0m já foi criada`);
      return;
    }
    console.log(`👾 \x1b[4mbuild >> config.yml\x1b[0m | criando a configurando do lambda \x1b[1m\x1b[33m${this.name}\x1b[0m`);

    let fileContent = [
      `${convertFunctionName(this.name)}:`,
      `  name: \${self:provider.stage}-\${self:service}-${this.name}`,
      `  handler: ${this.path}/index.handler`,
      '',
    ];

    let methodLine = '';
    switch (this.httpMethodType) {
      case HttpMethodType.GET:
        methodLine = '        method: get';
        break;
      case HttpMethodType.POST:
        methodLine = '        method: post';
        break;
      case HttpMethodType.PUT:
        methodLine = '        method: put';
        break;
      case HttpMethodType.DELETE:
        methodLine = '        method: delete';
        break;
      case HttpMethodType.PATCH:
        methodLine = '        method: patch';
        break;
    }
    let schemaLines = '';
    if (this.schemaObject) {
      this.schemaJson(project);
      schemaLines = [
        '        request:',
        '          schemas:',
        `            application/json: \${file(${this.path}/schema.json)}`,
        '',
      ].join('\n');
    }
    const event = [
      '  events:',
      '    - http:',
      methodLine,
      `        path: ${this.methodPath}`,
      this.schemaObject ? schemaLines : '',
    ].join('\n');
    fileContent = fileContent.concat(event);


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
    console.log(`👾 \x1b[4mbuild >> config.yml\x1b[0m | a configuração do lambda \x1b[1m\x1b[33m${this.name}\x1b[0m foi criada com sucesso`);
  }

  public sampleCode(project: Project) {
    if (existsSync(`${this.path}/index.ts`)) {
      console.warn(`🚫 \x1b[4m\x1b[31mbuild >> index.ts\x1b[0m | o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m já foi criado`);
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

    console.log(`👾 \x1b[4mbuild >> index.ts\x1b[0m | o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m foi criado com sucesso`);
  }

  public appendLambdaToServerlessYaml() {
    const data = readFileSync('serverless.yml');
    if (data.indexOf(`- \${file(${this.path}/config.yml)}`) > -1) {
      console.warn(`🚫 \x1b[4m\x1b[31mupdate >> serverless.yml\x1b[0m | o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m já foi inserido no serverless.yml`);
      // console.error('💀 \x1b[4m\x1b[31merror\x1b[0m | lambda já inserido no serverless.yml');
      return;
    }
    console.log(`👾 \x1b[4mupdate >> serverless.yml\x1b[0m | inserindo o lambda \x1b[1m\x1b[33m${this.name}\x1b[0m no serverless.yml`);
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
    console.log(`👾 \x1b[4mupdate >> serverless.yml\x1b[0m | lambda \x1b[1m\x1b[33m${this.name}\x1b[0m inserido com sucesso`);
  }
}