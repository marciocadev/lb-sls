import { Project, TextFile } from 'projen';
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

  public configYaml(project: Project) {
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