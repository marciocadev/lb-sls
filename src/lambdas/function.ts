export interface FunctionProps {
  /**
   * Nome do lambda
   */
  readonly name: string;
}

export class Function {
  public readonly name: string;
  public readonly path: string;

  constructor(props: FunctionProps) {
    this.name = props.name;
    this.path = `src/lambdas/${props.name}`;
  }
}