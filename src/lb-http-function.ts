import { existsSync } from 'fs';
import { JsonFile, Project, SourceCode, TextFile } from 'projen';
import { convertFunctionName, transformObjToSchema } from './lb-commons';
import { LBFunction } from './lb-function';
import { LBHttpEvent, LBHttpEventProps } from './lb-http-event';

export interface LBHttpFunctionProps extends LBHttpEventProps {
  /**
   * Habilita a vpc
   *
   * @default false
   */
  readonly vpc?: boolean;
  /**
   * Exemplo do schema
   */
  readonly schemaModel?: {[key: string]: any};
  readonly requiredKeys?: string[];
}

export class LBHttpFunction extends LBFunction {
  public readonly event: LBHttpEvent;
  public readonly vpc: boolean;
  public readonly project: Project;

  constructor(project: Project, props: LBHttpFunctionProps) {
    super(props);

    this.project = project;
    this.vpc = props.vpc ?? false;
    this.event = new LBHttpEvent(props);
    if (props.schemaModel) {
      this.schameExample(props.schemaModel, props.requiredKeys);
    }
  }

  public sampleCode() {
    if (existsSync(`${this.path}/index.ts`)) {
      return;
    }
    const code = new SourceCode(this.project, `${this.path}/index.ts`, {
      readonly: false,
      indent: 2,
    });

    code.line('import { APIGatewayProxyEvent, Context, APIGatewayProxyEventPathParameters, APIGatewayProxyEventQueryStringParameters } from \'aws-lambda\';');
    code.line('import { Logger } from \'@aws-lambda-powertools/logger\';');
    code.line('');
    code.line(`const logger = new Logger({ logLevel: \'INFO\', serviceName: \'${this.project.name}\' });`);
    code.line('');
    code.open('export const handler = async(event: APIGatewayProxyEvent, context: Context) => {');
    code.line('logger.addContext(context);');
    code.line('const body = JSON.parse(event.body ?? \'\');');
    code.line('');
    code.line('logger.info(\'body\', body);');
    code.line('logger.info(\'Header\', event.headers);');
    code.line('logger.info(\'path parameters\', event.pathParameters as APIGatewayProxyEventPathParameters);');
    code.line('logger.info(\'query parameters\', event.queryStringParameters as APIGatewayProxyEventQueryStringParameters);');
    code.line('');
    code.line('// some code here');
    code.line('');
    code.open('return {');
    code.line('statusCode: 200,');
    code.line('body: JSON.stringify(body, undefined, 2)');
    code.close('}');
    code.close('}');
  }

  public configYaml() {
    if (existsSync(`${this.path}/config.yml`)) {
      return;
    }
    let fileContent = [
      `${convertFunctionName(this.name)}:`,
      `  name: \${self:provider.stage}-\${self:service}-${this.name}`,
      `  handler: ${this.path}/index.handler`,
      '',
      this.event.toString(),
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

    new TextFile(this.project, `${this.path}/config.yml`, {
      marker: false,
      readonly: false,
      committed: true,
      lines: fileContent,
    });
  }

  public schameExample(obj: {[key: string]: any}, requiredKeys?: string[]) {
    if (existsSync(`${this.path}/schame.json`)) {
      return;
    }
    let schema: {[key:string]: any} = {};
    transformObjToSchema(obj, schema);
    schema.schema = 'http://json-schema.org/draft-04/schema#';
    if (requiredKeys) schema.required = requiredKeys;
    new JsonFile(this.project, `${this.path}/schame.json`, {
      obj: schema,
    });
  }
}