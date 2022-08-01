import { existsSync } from 'fs';
import { Project, SourceCode, TextFile } from 'projen';
import { convertFunctionName } from './lb-commons';
import { LBFunction, LBFunctionProps } from './lb-function';
import { LBHttpEvent, LBHttpEventProps } from './lb-http-event';

export interface LBHttpFunctionProps extends LBFunctionProps {
  readonly event: LBHttpEventProps;
  /**
   * Habilita a vpc
   *
   * @default false
   */
  readonly vpc?: boolean;
}

export class LBHttpFunction extends LBFunction {
  public readonly event: LBHttpEvent;
  public readonly vpc: boolean;

  constructor(props: LBHttpFunctionProps) {
    super(props);

    this.vpc = props.vpc ?? false;
    this.event = new LBHttpEvent(props.event);
  }

  public sampleCode(project: Project) {
    if (existsSync(`${this.path}/index.ts`)) {
      return;
    }
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

  public configYaml(project: Project) {
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
        '      - ${cf:${self:provider.stage}}-network.LambdaSecurityGroup}',
        '    subnetIds:',
        '      - ${cf:${self:provider.stage}}-network.PrivateSubnetA}',
        '      - ${cf:${self:provider.stage}}-network.PrivateSubnetB}',
      ].join('\n');
      fileContent = fileContent.concat(vpcContent);
    }

    new TextFile(project, `${this.path}/config.yml`, {
      marker: false,
      readonly: false,
      committed: true,
      lines: fileContent,
    });
  }
}