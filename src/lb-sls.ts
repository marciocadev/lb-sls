import { existsSync } from 'fs';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { bitbucketPipeline, readmeFile, serverless, vscodeSettings } from './commons';
import { HttpFunction, HttpLambdaProps } from './lambdas';

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

    // Cria o bitbucket pipeline
    if (!existsSync('bitbucket-pipeline.yml')) {
      bitbucketPipeline(this);
    }

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

  public addHttpFunction(props: HttpLambdaProps) {
    const lmb = new HttpFunction(props);
    lmb.appendLambdaToServerlessYaml();
    lmb.sampleCode(this);
    lmb.configYaml(this);
  }

  // public httpfunction(props: LBHttpFunctionProps) {
  //   const fnc = new LBHttpFunction(this, props);
  //   fnc.configYaml();
  //   fnc.sampleCode();
  // }
}