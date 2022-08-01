export enum LBEventType {
  HTTP, SQS
}

export interface LBEventProps {
  readonly eventType: LBEventType;
}

export class LBEvent {
  public readonly eventType: LBEventType;

  constructor(props: LBEventProps) {
    this.eventType = props.eventType;
  }
}