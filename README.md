# nodejs-automation-boilerplate
The default set of tools and CI we use at bambuu when developing TypeScript applications

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

# The tools
Each tool will briefly be described in this section, along with the command to run it.

## [prettier](LINK) - `yarn format`

> Prettier is an opinionated code formatter.
> It removes all original styling and ensures that all outputted code conforms to a consistent style. (See this [blog post](http://jlongster.com/A-Prettier-Formatter))

It is used to format code to follow a strict syntax, solves 3 problems:

- Ensures that all code follows the same style (indentation, line-breaks, bracket placement, all that stuff).
- Takes the responsiblity of well-formated code away from the developer. Developers no longer have to worry about syntax, you can basicly write all you code in one single line, and then run `Mor`
It solves 3 problems:is used to format code to follow a strict syntax. This ensures that all code follows the same style (indentation, line-breaks, bracket placement, all that stuff). More importantly, it takes

## [TSLint](LINK)

## [Jest](LINK)

## [plop](LINK)

## [source-map-explorer](LINK)

## File structure

The repo has the following structure:
```
project
│   README.md
│   file001.txt    
│
└───folder1
│   │   file011.txt
│   │   file012.txt
│   │
│   └───subfolder1
│       │   file111.txt
│       │   file112.txt
│       │   ...
│   
└───folder2
    │   file021.txt
    │   file022.txt
```

# Using it
