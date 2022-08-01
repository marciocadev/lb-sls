import { existsSync } from 'fs';
import { Project, SourceCode, TextFile } from 'projen';
import { convertFunctionName } from './lb-commons';
import { LBFunction, LBFunctionProps } from './lb-function';
import { LBHttpEvent, LBHttpEventProps } from './lb-http-event';

export interface LBHttpFunctionProps extends LBFunctionProps {
  readonly event: LBHttpEventProps;
}

export class LBHttpFunction extends LBFunction {
  public readonly event: LBHttpEvent;

  constructor(props: LBHttpFunctionProps) {
    super(props);

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

    code.line('import { APIGatewayProxyEvent, Context } from \'aws-lambda\';');
    code.line('import { Logger } from \'@aws-lambda-powertools/logger\';');
    code.line('');
    code.line('const logger = new Logger({ logLevel: \'INFO\', serviceName: \'Example\' });');
    code.line('');
    code.open('export const handler = async(event: APIGatewayProxyEvent, context: Context) => {');
    code.line('logger.addContext(context);');
    code.line('const body = JSON.parse(event.body ?? \'\');');
    code.line('');
    code.line('logger.info(\'Payload\', body);');
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

    new TextFile(project, `${this.path}/config.yml`, {
      marker: false,
      readonly: false,
      committed: true,
      lines: fileContent,
    });
  }
}