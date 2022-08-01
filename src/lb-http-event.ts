import { LBEvent, LBEventProps } from './lb-event';

export enum LBHttpMethodType {
  GET, POST, PUT, DELETE, PATCH
}

export interface LBHttpEventProps extends LBEventProps {
  readonly lbHttpMethodType: LBHttpMethodType;
  readonly gatewayPath: string;
}

export class LBHttpEvent extends LBEvent {
  public readonly lbHttpMethodType: LBHttpMethodType;
  public readonly gatewayPath: string;

  constructor(props: LBHttpEventProps) {
    super(props);

    this.lbHttpMethodType = props.lbHttpMethodType;
    this.gatewayPath = props.gatewayPath;
  }

  public toString(): string {
    let methodLine = '';
    switch (this.lbHttpMethodType) {
      case LBHttpMethodType.GET:
        methodLine = '        method: get';
        break;
      case LBHttpMethodType.POST:
        methodLine = '        method: post';
        break;
      case LBHttpMethodType.PUT:
        methodLine = '        method: put';
        break;
      case LBHttpMethodType.DELETE:
        methodLine = '        method: delete';
        break;
      case LBHttpMethodType.PATCH:
        methodLine = '        method: patch';
        break;
    }
    const event = [
      '  events:',
      '    - http:',
      methodLine,
      `        path: ${this.gatewayPath}`,
      '',
    ].join('\n');
    return event;
  }
}