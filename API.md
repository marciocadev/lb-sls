# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### LBFunctionProps <a name="LBFunctionProps" id="lb-sls.LBFunctionProps"></a>

#### Initializer <a name="Initializer" id="lb-sls.LBFunctionProps.Initializer"></a>

```typescript
import { LBFunctionProps } from 'lb-sls'

const lBFunctionProps: LBFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBFunctionProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBFunctionProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### LBHttpEventProps <a name="LBHttpEventProps" id="lb-sls.LBHttpEventProps"></a>

#### Initializer <a name="Initializer" id="lb-sls.LBHttpEventProps.Initializer"></a>

```typescript
import { LBHttpEventProps } from 'lb-sls'

const lBHttpEventProps: LBHttpEventProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBHttpEventProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBHttpEventProps.property.httpPath">httpPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBHttpEventProps.property.lbHttpMethodType">lbHttpMethodType</a></code> | <code><a href="#lb-sls.LBHttpMethodType">LBHttpMethodType</a></code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBHttpEventProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `httpPath`<sup>Required</sup> <a name="httpPath" id="lb-sls.LBHttpEventProps.property.httpPath"></a>

```typescript
public readonly httpPath: string;
```

- *Type:* string

---

##### `lbHttpMethodType`<sup>Required</sup> <a name="lbHttpMethodType" id="lb-sls.LBHttpEventProps.property.lbHttpMethodType"></a>

```typescript
public readonly lbHttpMethodType: LBHttpMethodType;
```

- *Type:* <a href="#lb-sls.LBHttpMethodType">LBHttpMethodType</a>

---

### LBHttpFunctionProps <a name="LBHttpFunctionProps" id="lb-sls.LBHttpFunctionProps"></a>

#### Initializer <a name="Initializer" id="lb-sls.LBHttpFunctionProps.Initializer"></a>

```typescript
import { LBHttpFunctionProps } from 'lb-sls'

const lBHttpFunctionProps: LBHttpFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBHttpFunctionProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBHttpFunctionProps.property.httpPath">httpPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBHttpFunctionProps.property.lbHttpMethodType">lbHttpMethodType</a></code> | <code><a href="#lb-sls.LBHttpMethodType">LBHttpMethodType</a></code> | *No description.* |
| <code><a href="#lb-sls.LBHttpFunctionProps.property.vpc">vpc</a></code> | <code>boolean</code> | Habilita a vpc. |

---

##### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBHttpFunctionProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `httpPath`<sup>Required</sup> <a name="httpPath" id="lb-sls.LBHttpFunctionProps.property.httpPath"></a>

```typescript
public readonly httpPath: string;
```

- *Type:* string

---

##### `lbHttpMethodType`<sup>Required</sup> <a name="lbHttpMethodType" id="lb-sls.LBHttpFunctionProps.property.lbHttpMethodType"></a>

```typescript
public readonly lbHttpMethodType: LBHttpMethodType;
```

- *Type:* <a href="#lb-sls.LBHttpMethodType">LBHttpMethodType</a>

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="lb-sls.LBHttpFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: boolean;
```

- *Type:* boolean
- *Default:* false

Habilita a vpc.

---

## Classes <a name="Classes" id="Classes"></a>

### LBFunction <a name="LBFunction" id="lb-sls.LBFunction"></a>

#### Initializers <a name="Initializers" id="lb-sls.LBFunction.Initializer"></a>

```typescript
import { LBFunction } from 'lb-sls'

new LBFunction(props: LBFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBFunction.Initializer.parameter.props">props</a></code> | <code><a href="#lb-sls.LBFunctionProps">LBFunctionProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="lb-sls.LBFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#lb-sls.LBFunctionProps">LBFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lb-sls.LBFunction.appendFunctionToServerlessYaml">appendFunctionToServerlessYaml</a></code> | *No description.* |

---

##### `appendFunctionToServerlessYaml` <a name="appendFunctionToServerlessYaml" id="lb-sls.LBFunction.appendFunctionToServerlessYaml"></a>

```typescript
public appendFunctionToServerlessYaml(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBFunction.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="lb-sls.LBFunction.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---


### LBHttpEvent <a name="LBHttpEvent" id="lb-sls.LBHttpEvent"></a>

#### Initializers <a name="Initializers" id="lb-sls.LBHttpEvent.Initializer"></a>

```typescript
import { LBHttpEvent } from 'lb-sls'

new LBHttpEvent(props: LBHttpEventProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBHttpEvent.Initializer.parameter.props">props</a></code> | <code><a href="#lb-sls.LBHttpEventProps">LBHttpEventProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="lb-sls.LBHttpEvent.Initializer.parameter.props"></a>

- *Type:* <a href="#lb-sls.LBHttpEventProps">LBHttpEventProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lb-sls.LBHttpEvent.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="lb-sls.LBHttpEvent.toString"></a>

```typescript
public toString(): string
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBHttpEvent.property.httpPath">httpPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBHttpEvent.property.lbHttpMethodType">lbHttpMethodType</a></code> | <code><a href="#lb-sls.LBHttpMethodType">LBHttpMethodType</a></code> | *No description.* |

---

##### `httpPath`<sup>Required</sup> <a name="httpPath" id="lb-sls.LBHttpEvent.property.httpPath"></a>

```typescript
public readonly httpPath: string;
```

- *Type:* string

---

##### `lbHttpMethodType`<sup>Required</sup> <a name="lbHttpMethodType" id="lb-sls.LBHttpEvent.property.lbHttpMethodType"></a>

```typescript
public readonly lbHttpMethodType: LBHttpMethodType;
```

- *Type:* <a href="#lb-sls.LBHttpMethodType">LBHttpMethodType</a>

---


### LBHttpFunction <a name="LBHttpFunction" id="lb-sls.LBHttpFunction"></a>

#### Initializers <a name="Initializers" id="lb-sls.LBHttpFunction.Initializer"></a>

```typescript
import { LBHttpFunction } from 'lb-sls'

new LBHttpFunction(props: LBHttpFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBHttpFunction.Initializer.parameter.props">props</a></code> | <code><a href="#lb-sls.LBHttpFunctionProps">LBHttpFunctionProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="lb-sls.LBHttpFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#lb-sls.LBHttpFunctionProps">LBHttpFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lb-sls.LBHttpFunction.appendFunctionToServerlessYaml">appendFunctionToServerlessYaml</a></code> | *No description.* |
| <code><a href="#lb-sls.LBHttpFunction.configYaml">configYaml</a></code> | *No description.* |
| <code><a href="#lb-sls.LBHttpFunction.sampleCode">sampleCode</a></code> | *No description.* |

---

##### `appendFunctionToServerlessYaml` <a name="appendFunctionToServerlessYaml" id="lb-sls.LBHttpFunction.appendFunctionToServerlessYaml"></a>

```typescript
public appendFunctionToServerlessYaml(): void
```

##### `configYaml` <a name="configYaml" id="lb-sls.LBHttpFunction.configYaml"></a>

```typescript
public configYaml(project: Project): void
```

###### `project`<sup>Required</sup> <a name="project" id="lb-sls.LBHttpFunction.configYaml.parameter.project"></a>

- *Type:* projen.Project

---

##### `sampleCode` <a name="sampleCode" id="lb-sls.LBHttpFunction.sampleCode"></a>

```typescript
public sampleCode(project: Project): void
```

###### `project`<sup>Required</sup> <a name="project" id="lb-sls.LBHttpFunction.sampleCode.parameter.project"></a>

- *Type:* projen.Project

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBHttpFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBHttpFunction.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBHttpFunction.property.event">event</a></code> | <code><a href="#lb-sls.LBHttpEvent">LBHttpEvent</a></code> | *No description.* |
| <code><a href="#lb-sls.LBHttpFunction.property.vpc">vpc</a></code> | <code>boolean</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBHttpFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="lb-sls.LBHttpFunction.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `event`<sup>Required</sup> <a name="event" id="lb-sls.LBHttpFunction.property.event"></a>

```typescript
public readonly event: LBHttpEvent;
```

- *Type:* <a href="#lb-sls.LBHttpEvent">LBHttpEvent</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="lb-sls.LBHttpFunction.property.vpc"></a>

```typescript
public readonly vpc: boolean;
```

- *Type:* boolean

---


### LBSls <a name="LBSls" id="lb-sls.LBSls"></a>

LBSls.

#### Initializers <a name="Initializers" id="lb-sls.LBSls.Initializer"></a>

```typescript
import { LBSls } from 'lb-sls'

new LBSls(options: TypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBSls.Initializer.parameter.options">options</a></code> | <code>projen.typescript.TypeScriptProjectOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="lb-sls.LBSls.Initializer.parameter.options"></a>

- *Type:* projen.typescript.TypeScriptProjectOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lb-sls.LBSls.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#lb-sls.LBSls.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#lb-sls.LBSls.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#lb-sls.LBSls.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#lb-sls.LBSls.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#lb-sls.LBSls.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#lb-sls.LBSls.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#lb-sls.LBSls.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#lb-sls.LBSls.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#lb-sls.LBSls.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#lb-sls.LBSls.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#lb-sls.LBSls.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#lb-sls.LBSls.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#lb-sls.LBSls.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#lb-sls.LBSls.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#lb-sls.LBSls.addBins">addBins</a></code> | *No description.* |
| <code><a href="#lb-sls.LBSls.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#lb-sls.LBSls.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#lb-sls.LBSls.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#lb-sls.LBSls.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#lb-sls.LBSls.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#lb-sls.LBSls.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#lb-sls.LBSls.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#lb-sls.LBSls.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#lb-sls.LBSls.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#lb-sls.LBSls.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#lb-sls.LBSls.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#lb-sls.LBSls.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#lb-sls.LBSls.httpfunction">httpfunction</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="lb-sls.LBSls.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="lb-sls.LBSls.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="lb-sls.LBSls.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="lb-sls.LBSls.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="lb-sls.LBSls.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="lb-sls.LBSls.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="lb-sls.LBSls.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBSls.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="lb-sls.LBSls.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="lb-sls.LBSls.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="lb-sls.LBSls.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="lb-sls.LBSls.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="lb-sls.LBSls.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="lb-sls.LBSls.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="lb-sls.LBSls.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="lb-sls.LBSls.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBSls.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="lb-sls.LBSls.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="lb-sls.LBSls.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="lb-sls.LBSls.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="lb-sls.LBSls.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="lb-sls.LBSls.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="lb-sls.LBSls.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="lb-sls.LBSls.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="lb-sls.LBSls.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="lb-sls.LBSls.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="lb-sls.LBSls.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="lb-sls.LBSls.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="lb-sls.LBSls.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="lb-sls.LBSls.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="lb-sls.LBSls.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="lb-sls.LBSls.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="lb-sls.LBSls.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="lb-sls.LBSls.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="lb-sls.LBSls.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="lb-sls.LBSls.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="lb-sls.LBSls.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="lb-sls.LBSls.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="lb-sls.LBSls.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="lb-sls.LBSls.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="lb-sls.LBSls.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="lb-sls.LBSls.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="lb-sls.LBSls.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="lb-sls.LBSls.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="lb-sls.LBSls.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="lb-sls.LBSls.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### `hasScript` <a name="hasScript" id="lb-sls.LBSls.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBSls.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="lb-sls.LBSls.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBSls.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="lb-sls.LBSls.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="lb-sls.LBSls.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="lb-sls.LBSls.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBSls.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="lb-sls.LBSls.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `httpfunction` <a name="httpfunction" id="lb-sls.LBSls.httpfunction"></a>

```typescript
public httpfunction(props: LBHttpFunctionProps): void
```

###### `props`<sup>Required</sup> <a name="props" id="lb-sls.LBSls.httpfunction.parameter.props"></a>

- *Type:* <a href="#lb-sls.LBHttpFunctionProps">LBHttpFunctionProps</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBSls.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#lb-sls.LBSls.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#lb-sls.LBSls.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#lb-sls.LBSls.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#lb-sls.LBSls.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#lb-sls.LBSls.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#lb-sls.LBSls.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#lb-sls.LBSls.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#lb-sls.LBSls.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#lb-sls.LBSls.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#lb-sls.LBSls.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#lb-sls.LBSls.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#lb-sls.LBSls.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#lb-sls.LBSls.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#lb-sls.LBSls.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#lb-sls.LBSls.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#lb-sls.LBSls.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#lb-sls.LBSls.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#lb-sls.LBSls.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#lb-sls.LBSls.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#lb-sls.LBSls.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#lb-sls.LBSls.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#lb-sls.LBSls.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#lb-sls.LBSls.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#lb-sls.LBSls.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#lb-sls.LBSls.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#lb-sls.LBSls.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#lb-sls.LBSls.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#lb-sls.LBSls.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#lb-sls.LBSls.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#lb-sls.LBSls.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this pacakge. |
| <code><a href="#lb-sls.LBSls.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#lb-sls.LBSls.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#lb-sls.LBSls.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#lb-sls.LBSls.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#lb-sls.LBSls.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#lb-sls.LBSls.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#lb-sls.LBSls.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#lb-sls.LBSls.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#lb-sls.LBSls.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#lb-sls.LBSls.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#lb-sls.LBSls.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#lb-sls.LBSls.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="lb-sls.LBSls.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="lb-sls.LBSls.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="lb-sls.LBSls.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="lb-sls.LBSls.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="lb-sls.LBSls.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="lb-sls.LBSls.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="lb-sls.LBSls.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="lb-sls.LBSls.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="lb-sls.LBSls.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="lb-sls.LBSls.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="lb-sls.LBSls.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="lb-sls.LBSls.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="lb-sls.LBSls.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="lb-sls.LBSls.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="lb-sls.LBSls.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="lb-sls.LBSls.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="lb-sls.LBSls.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="lb-sls.LBSls.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="lb-sls.LBSls.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="lb-sls.LBSls.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="lb-sls.LBSls.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="lb-sls.LBSls.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="lb-sls.LBSls.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="lb-sls.LBSls.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="lb-sls.LBSls.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="lb-sls.LBSls.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="lb-sls.LBSls.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="lb-sls.LBSls.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="lb-sls.LBSls.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="lb-sls.LBSls.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="lb-sls.LBSls.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="lb-sls.LBSls.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="lb-sls.LBSls.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="lb-sls.LBSls.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `package`<sup>Required</sup> <a name="package" id="lb-sls.LBSls.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="lb-sls.LBSls.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="lb-sls.LBSls.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="lb-sls.LBSls.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="lb-sls.LBSls.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="lb-sls.LBSls.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="lb-sls.LBSls.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="lb-sls.LBSls.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this pacakge.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="lb-sls.LBSls.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="lb-sls.LBSls.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="lb-sls.LBSls.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="lb-sls.LBSls.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="lb-sls.LBSls.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="lb-sls.LBSls.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="lb-sls.LBSls.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="lb-sls.LBSls.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="lb-sls.LBSls.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="lb-sls.LBSls.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="lb-sls.LBSls.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="lb-sls.LBSls.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="lb-sls.LBSls.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="lb-sls.LBSls.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="lb-sls.LBSls.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="lb-sls.LBSls.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lb-sls.LBSls.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="lb-sls.LBSls.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


## Enums <a name="Enums" id="Enums"></a>

### LBHttpMethodType <a name="LBHttpMethodType" id="lb-sls.LBHttpMethodType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lb-sls.LBHttpMethodType.GET">GET</a></code> | *No description.* |
| <code><a href="#lb-sls.LBHttpMethodType.POST">POST</a></code> | *No description.* |
| <code><a href="#lb-sls.LBHttpMethodType.PUT">PUT</a></code> | *No description.* |
| <code><a href="#lb-sls.LBHttpMethodType.DELETE">DELETE</a></code> | *No description.* |
| <code><a href="#lb-sls.LBHttpMethodType.PATCH">PATCH</a></code> | *No description.* |

---

##### `GET` <a name="GET" id="lb-sls.LBHttpMethodType.GET"></a>

---


##### `POST` <a name="POST" id="lb-sls.LBHttpMethodType.POST"></a>

---


##### `PUT` <a name="PUT" id="lb-sls.LBHttpMethodType.PUT"></a>

---


##### `DELETE` <a name="DELETE" id="lb-sls.LBHttpMethodType.DELETE"></a>

---


##### `PATCH` <a name="PATCH" id="lb-sls.LBHttpMethodType.PATCH"></a>

---

