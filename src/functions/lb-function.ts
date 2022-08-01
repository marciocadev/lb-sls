import { readFileSync, writeFileSync } from 'fs';

export interface LBFunctionProps {
  readonly name: string;
}

export class LBFunction {
  public readonly name: string;

  constructor(props: LBFunctionProps) {
    this.name = props.name;

    this.appendFunctionToServerlessYaml();
  }

  appendFunctionToServerlessYaml() {
    const data = readFileSync('serverless.yml');
    let initialData, middleData, finalData;
    const posFunctions = data.indexOf('functions:');
    if (posFunctions > -1) {
      const pos = posFunctions + 'functions:'.length;
      initialData = [data.slice(0, pos)].join('');
      middleData = `  - \${file(src/functions/${this.name}/config.yml)}`;
      finalData = [data.slice(pos)].join('');
    } else {
      initialData = [data.slice(0, data.length)].join('');
      middleData = 'functions:';
      finalData = `  - \${file(src/functions/${this.name}/config.yml)}`;
    }
    const newData = [initialData, middleData, finalData].join('\n');
    writeFileSync('serverless.yml', newData);
  }
}