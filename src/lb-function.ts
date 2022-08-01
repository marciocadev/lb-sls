import { readFileSync, writeFileSync } from 'fs';

export interface LBFunctionProps {
  readonly name: string;
}

export class LBFunction {
  public readonly name: string;
  public readonly path: string;

  constructor(props: LBFunctionProps) {
    this.name = props.name;
    this.path = `src/functions/${props.name}`;

    this.appendFunctionToServerlessYaml();
  }

  appendFunctionToServerlessYaml() {
    const data = readFileSync('serverless.yml');
    if (data.indexOf(`- \${file(${this.path}/config.yml)}`) === -1) {
      return;
    }
    let initialData, middleData, finalData;
    const posFunctions = data.indexOf('functions:');
    if (posFunctions > -1) {
      const pos = posFunctions + 'functions:'.length;
      initialData = [data.slice(0, pos)].join('');
      middleData = `  - \${file(${this.path}/config.yml)}`;
      finalData = [data.slice(pos)].join('');
    } else {
      initialData = [data.slice(0, data.length)].join('');
      middleData = 'functions:';
      finalData = `  - \${file(${this.path}/config.yml)}`;
    }
    const newData = [initialData, middleData, finalData].join('\n');
    writeFileSync('serverless.yml', newData);
  }
}