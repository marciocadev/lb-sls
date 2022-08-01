export enum LBEventType {
  HTTP, SQS
}

export interface LBEventProps {
  readonly lbEventType: LBEventType;
}

export class LBEvent {
  public readonly lbEventType: LBEventType;

  constructor(props: LBEventProps) {
    this.lbEventType = props.lbEventType;
  }
}