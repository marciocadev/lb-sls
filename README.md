# LB-SLS

Este projeto tem como objetivo facilitar a criação de projetos serverless para a AWS utilizando o Projen, Typescript e Serverless Framework

<hr/>

## Inicialização

Para gerar o projeto execute os comandos conforme o exemplo abaixo:
```console
$ mkdir novo-projeto
$ cd novo-projeto
$ npx projen new --from lb-sls
...
```

<hr/>

## Modo de uso

Uma vez que o projeto tenha sido criado você encontrará na raiz do projeto o arquivo `.projenrc.ts` com o seguinte conteúdo:

```ts
import { LBSls } from 'lb-sls';
const project = new LBSls({
  defaultReleaseBranch: 'main',
  devDeps: ['lb-sls'],
  name: 'novo-projeto',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
```

Este arquivo permite que várias funcionalidades do projeto sejam configuradas

Ao se alterar o arquivo `.projenrc.ts` execute o comando *projen* no bash/cmd para que as alterações sejam processadas

```console
$ projen
```
<hr/>

## Exemplos

**Adiciona o `axios` como uma dependência**

```ts
import { HttpMethodType, LBSls } from 'lb-sls';
const project = new LBSls({
  defaultReleaseBranch: 'main',
  devDeps: ['lb-sls'],
  name: 'novo-projeto',

  deps: ['axios'],
});
project.synth();
```
**package.json**
```json
"dependencies": {
    "@aws-lambda-powertools/logger": "^1.0.2",
    "@types/aws-lambda": "^8.10.101",
    "axios": "^0.27.2",
    "esbuild": "^0.14.53",
    "serverless": "^3.21.0",
    "serverless-esbuild": "^1.32.5"
  },
```

<hr/>

**Lambda com integração com o API Gateway utilizando o método POST**

```ts
...

project.addHttpFunction({
  name: 'lambda-exemplo',
  methodPath: 'lambda/teste',
  httpMethodType: HttpMethodType.POST
});

project.synth();
```

<hr/>

**Lambda com integração com o API Gateway utilizando o método POST e validando o payload**

```ts
...

project.addHttpFunction({
  name: 'lambda-exemplo',
  methodPath: 'lambda/teste',
  httpMethodType: HttpMethodType.POST,
  schemaObject: {
    movie: 'Jaws',
    release: 1975,
    imdbRating: 8.1
  },
  requiredKeys: ['movie']
});

project.synth();
```

**Lambda com integração com o API Gateway utilizando o método POST com a VPC configurada**

```ts
...

project.addHttpFunction({
  name: 'lambda-exemplo',
  methodPath: 'lambda/teste',
  httpMethodType: HttpMethodType.POST,
  vpc: true
});

project.synth();
```

## Comandos
* sls package - Gera o pacote de implantação
* sls deploy - Executa o deploy na AWS
* sls remove - Remove a stack da AWS
* projen - atualiza o projeto conforme configurado no arquivo `.projenrc.ts`