import { existsSync } from 'fs';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';
import { bitbucketPipeline, readmeFile, readmeScript, serverless, vscodeSettings } from './commons';
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
    // this.addDeps('@middy/core');
    this.addDeps('@aws-lambda-powertools/logger');

    readmeScript(this);

    // expand markdown macros in readme
    const macros = this.addTask('readme-macros');
    macros.exec('mv README.md README.md.bak');
    macros.exec('cat README.md.bak | markmac > README.md');
    macros.exec('rm README.md.bak');
    this.defaultTask?.spawn(macros);
  }

  public addHttpFunction(props: HttpLambdaProps) {
    const lmb = new HttpFunction(props);
    lmb.appendLambdaToServerlessYaml();
    lmb.sampleCode(this);
    lmb.configYaml(this);
  }
};
