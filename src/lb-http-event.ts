import { LBFunctionProps } from './lb-function';

export enum LBHttpMethodType {
  GET, POST, PUT, DELETE, PATCH
}

export interface LBHttpEventProps extends LBFunctionProps {
  readonly lbHttpMethodType: LBHttpMethodType;
  readonly httpPath: string;
}

export class LBHttpEvent {
  public readonly lbHttpMethodType: LBHttpMethodType;
  public readonly httpPath: string;

  constructor(props: LBHttpEventProps) {
    this.lbHttpMethodType = props.lbHttpMethodType;
    this.httpPath = props.httpPath;
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
      `        path: ${this.httpPath}`,
      '',
    ].join('\n');
    return event;
  }
}