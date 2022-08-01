import { existsSync } from 'fs';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { LBHttpFunction, LBHttpFunctionProps } from './lb-http-function';
import { readmeFile } from './lb-readme';
import { serverless } from './lb-serverless-yaml';
import { vscodeSettings } from './lb-vscode';

/**
 * LBSls
 */
export class LBSls extends TypeScriptProject {
  constructor(options: TypeScriptProjectOptions) {
    super({
      readme: {
        filename: 'README.md',
        contents: readmeFile(options.name),
      },
      github: false,
      licensed: false,
      sampleCode: true,
      projenrcTs: true,
      ...options,
    });

    // Cria o arquivo de configuração do vscode
    if (!existsSync('.vscode/settings.json')) {
      vscodeSettings(this);
    }

    // Se o serverless.yml não existir cria o arquivo básico
    if (!existsSync('serverless.yml')) {
      serverless(this);
    }

    this.addDeps('esbuild');
    this.addDeps('serverless');
    this.addDeps('serverless-esbuild');
    this.addDeps('@types/aws-lambda');
    this.addDeps('@aws-lambda-powertools/logger');
  }

  public httpfunction(props: LBHttpFunctionProps) {
    const fnc = new LBHttpFunction(props);
    fnc.configYaml(this);
    fnc.sampleCode(this);
  }
}