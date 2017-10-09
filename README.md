# Node.js Automation Boilerplate
The default set of tools and CI we use at bambuu when developing TypeScript applications. With a few adjustments, this can also be used to develop regular JavaScript instead of TypeScript.

## What is this?
This repo contains the simplest setup and configuration that enables continous integration with [CircleCI](https://circleci.com), as well as Node.js tools to automate our processes, like formatting, linting, and generating files.

### What is this NOT?
This is not intended to be a framework or library you should just clone and get started with. This just contains the bits that are nescessary to demonstrate the CI and tools, so it works best if you just grab the pieces you need, instead of the whole thing. However, you are free to do that if you want to, we won't judge. 👌

## Why?
This repo serves multiple purposes:

1. Have a single place where we can maintain and grab the configurations we need to start a new project, without setting everything up from scratch.
2. Share our setup with others, so they can easily create their own automated workflows and pipelines as well.
3. Discuss the setup with others, so we can get tips and recommendations on how to make the workflow even better!

That last bit is important. If you have any suggestions or something you want to discuss, please create an issue and share it with us! You are also more than welcome to make pull requests here. 👍

# Using it

# The commands

- `yarn format` - format code syntax across project.
- `yarn lint` - lint code style across project.
- `yarn test` - run all tests.
- `yarn watch` - continously run all tests, watching for file changes.
- `yarn plop` - generate new files.
- `yarn analyze` - analyze the bundle, and visualize the dependency tree.
- `yarn analyze:ci` - generate an html file with the dependency tree - should only be used by CircleCI, not manually.
- `yarn build` - compile TypeScript files to JavaScript.

# The tools
Each tool will briefly be described in this section, along with the command to run it.

## [prettier](https://github.com/prettier/prettier) - `yarn format`

> Prettier is an opinionated code formatter.
> It removes all original styling and ensures that all outputted code conforms to a consistent style. (See this [blog post](http://jlongster.com/A-Prettier-Formatter))

It is used to format code to follow a strict syntax, solves 3 problems:

- Ensures that all code follows the same style (indentation, line-breaks, bracket placement, all that stuff).
- Takes the responsiblity of well-formated code away from the developer. Developers no longer have to worry about syntax, you can basicly write all you code in one single line, and then run `yarn format` to format the code nicely with indentation and line breaks.
- Removes any way to discuss code style within the team. As we litteraly have no control over how the code is formatted, we don't feel a need to talk about it, because we have no influence on the style.

Prettier is set up to run on precommit, meaning that everytime you commit to git, it will format the comitted files to make sure all files are correctly formatted.

## [TSLint](https://palantir.github.io/tslint/) - `yarn lint`

> TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors.

TSLint is used to check the code for correct style and usage. In bambuu, we do not use TSLint to check the syntax, as prettier handles that for us. But we do use it to check for stuff like [unused variables](https://palantir.github.io/tslint/rules/no-unused-variable/), [eliminating calls to console.log](https://palantir.github.io/tslint/rules/no-console/), etc.

The lint rules that bambuu uses is described in the `tslint.json` file.

## [Jest](https://github.com/facebook/jest) - `yarn test` and `yarn watch`

> 🃏 Delightful JavaScript Testing

The testing solution used to run unit tests and more.

The test files needs to be in a folder called `__tests__`, or the filename must end with `.test.ts`, `.test.tsx`, etc.

## [plop](https://github.com/amwmedia/plop) - `yarn plop`

> Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity.

Used to generate new files in a project, that follows the same patterns. Useful if you are constantly have to create new files that uses the same structure every time. With plop you create a generator, and specifies which questions to ask, and which templates to generate based on the answers.

An example of a plop generator can be seen in the `plopfile.js` + `templates` folder.

## [source-map-explorer](https://github.com/danvk/source-map-explorer) - `yarn analyze`

> Analyze and debug JavaScript (or Sass or LESS) code bloat through source maps.

Used to get an overview of all the dependencies in your project, to scout for unused or bloated dependencies. As an example, it was used to spot that we were still bundling a very large data-visualizing library called [Victory](https://github.com/FormidableLabs/victory), even though we had stopped using it a long time ago. [Se a demo of it in action here.](https://cdn.rawgit.com/danvk/source-map-explorer/08b0e130cb9345f9061760bf8a8d9136ea60b457/demo-bug.html)

## File structure

The repo has the following structure:
```
project-root
│   README.md                    // you're reading it
│   package.json                 // Contains all the dependencies, and describes the scripts
│   plopfile.js                  // Configures the plop generator
│   tslint.json                  // Rules for TSLint
│   tsconfig.json                // Configuration for TypeScript - is very different for each project!
│
└───.circleci
│   │   config.yml               // Configuration for the CircleCI steps
│   │   deploy.sh                // Simple script to deploy the built project to a server
│
└───templates                    // Example of templates used with plop
    │   component.hsb
    │   component.fetching.hsb
```
