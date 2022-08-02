import { existsSync } from 'fs';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { pipeline } from './bitbucket';
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
      sampleCode: false,
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

    pipeline(this);

    this.addDeps('esbuild');
    this.addDeps('serverless');
    this.addDeps('serverless-esbuild');
    this.addDeps('@types/aws-lambda');
    this.addDeps('@aws-lambda-powertools/logger');
  }

  public httpfunction(props: LBHttpFunctionProps) {
    const fnc = new LBHttpFunction(this, props);
    fnc.configYaml();
    fnc.sampleCode();
  }
}