## Typescript Advance Course Practices
- Here you find code from my practice with TS advanced course

## What you will find in this project?
- Auto bundling and running: When you perform any of execution options, the current typescript file will be bundled to a `js` file in the `dist/` folder, which will be created on the first run and overwrite the previous file on the following run and also will run the `js` file in the sequence;    
- Linter: ***EsLint** has some settings to help you to avoid common errors when writing code and also will suggest good practices to follow;
- Husky: Set to run lint before a commit, others commands can be added according your necessity
- Basic typescript examples: These examples help to understand how typescript works, considering that is a beginner level project.

**_*Please consider that all disabled rules are used just for example purposes, all the rules set on EsLint are updated and according with good practices for TypeScript, so avoid using the examples with disabled EsLint rules_**.

## Execution Options

#### Easy way

1- Hit `F5` key.

#### Command Line
2 - Run following commands on terminal:
* `npx webpack --mode development src/your_folder/your_file.ts`
* `node dist/bundle.js`.


## Table of Contents

1. [Install](#install)
2. [VS Code and Extensions](#vs-code-and-extensions)
3. [Prepare Your Local Repo](#prepare-your-local-repo)
4. [Project Dependencies](#project-dependencies)
5. [Detailed Folder Structure and Configurations](#detailed-folder-structure-and-configurations)
    1. [Folders](#folders)
    2. [Files](#files)

### Install

- [Node.js](https://nodejs.org/en/download/current)
- [TypeScript](https://www.typescriptlang.org/download)
- [Git](https://git-scm.com/downloads)

### VS Code and Extensions

VS Code is mandatory but extensions are optional but highly recommended.

- [VS Code](https://code.visualstudio.com/)
- [Material Icon](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [TypeScript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Dracula Pure](https://marketplace.visualstudio.com/items?itemName=blackblackcat.dracula-pure)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [TabNine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

### Prepare Your Local Repo

- Run `npm ci`

### Project Dependencies

Here is a brief description of each dependency used for this project:

- **`@types/node`**
  - Provides TypeScript type definitions for Node.js, helping to ensure that TypeScript code interacts correctly with Node.js APIs.

- **`@typescript-eslint/eslint-plugin`**
  - An ESLint plugin that provides TypeScript-specific rules, helping to maintain clean and consistent TypeScript code.

- **`cross-env`**
  - Allows you to set environment variables in a way that is compatible with different operating systems, useful for configuring environment variables in npm scripts.

- **`eslint`**
  - A linting tool for JavaScript and TypeScript that analyzes code for patterns and issues, helping to maintain cleaner and error-free code.

- **`eslint-config-prettier`**
  - Disables ESLint rules that may conflict with Prettier, a code formatting tool, allowing Prettier and ESLint to work together without conflicts.

- **`eslint-config-standard-with-typescript`**
  - An ESLint configuration that includes Standard Style rules for JavaScript and TypeScript, ensuring consistent code style.

- **`eslint-plugin-import`**
  - An ESLint plugin that helps to ensure correct and ordered imports in JavaScript/TypeScript code.

- **`eslint-plugin-n`**
  - An ESLint plugin that provides additional rules for Node.js code, ensuring better practices specific to the Node.js environment.

- **`eslint-plugin-prettier`**
  - An ESLint plugin that integrates Prettier directly into the linting process, ensuring that code is formatted correctly according to Prettier rules.

- **`eslint-plugin-promise`**
  - An ESLint plugin that provides rules to improve the use of Promises in JavaScript/TypeScript code, ensuring correct and problem-free usage.

- **`glob`**
  - A library that allows for file and directory matching using glob patterns, useful for tasks like finding TypeScript files.

- **`husky`**
  - A tool that facilitates running scripts in Git hooks (such as `pre-commit` and `pre-push`), helping to ensure code is in a valid state before committing to the repository.

- **`lint-staged`**
  - Runs linters only on files that are about to be committed, improving the efficiency of the linting process and ensuring that only modified files are checked.

- **`prettier`**
  - A code formatting tool that helps to maintain consistent and clean code style by automatically formatting code according to predefined rules.

- **`ts-loader`**
  - A Webpack loader that compiles TypeScript files into JavaScript, integrating TypeScript with the Webpack build process.

- **`ts-node`**
  - A TypeScript executable that allows running TypeScript files directly in Node.js without needing pre-compilation.

- **`ts-node-dev`**
  - A development utility for TypeScript that provides automatic reloading and a faster, more efficient development experience.

- **`typescript`**
  - The TypeScript compiler that transforms TypeScript code into JavaScript, enabling the use of advanced TypeScript features in development.

- **`webpack`**
  - A module bundler for JavaScript that compiles and optimizes code and its assets into one or more output files.

- **`webpack-cli`**
  - A command-line interface for Webpack, allowing you to run and configure Webpack from the terminal.

### Detailed Folder Structure and Configurations
#### Folders
- **`.husky`**
  - Pre-commit configurations, others settings can be added as well, such as pre-push and post-merge;
  - The "_" folder store template files with proper names and extensions for each setting;
  - In order to add other setting, copy the template file to the ".husky" as done with "pre-commit" setting.

- **`.vscode`**
  - Json files with custom configurations, no need to change.

- **`dist`**
  - Folder that store the bundled typescript file.

- **`src/scripts`**
  - All scripts containing the basics of typescript, although they are all parametrized with eslint, which is configured as detailed below.

#### Files
- **`.eslintignore`**
  - Configuration file that lists the files and directories to be ignored by ESLint during code linting.

- **`.eslintrc.json`**
  - Main configuration file for ESLint, containing settings, rules, and plugins. You can customize this file according to your project’s linting requirements.

- **`.gitignore`**
  - Configuration file specifying files and directories to be ignored by Git. These items won’t be tracked or pushed to your repository.

- **`.lintstagedrc.json`**
  - Configuration file that defines commands to be executed on staged files before a commit. This is commonly used to run linters or formatters, for this project these commands are executed by Husky.

- **`.prettierrc.json`**
  - Configuration file for Prettier, a code formatter. It contains formatting rules like line width, tab width, and style preferences, for this project only a basic configuration was set due ESLint rules already cover all the rest.

- **`package-lock.json`**
  - Auto-generated file that ensures the consistency of installed node modules across environments. It records the exact version of each installed dependency.

- **`package.json`**
  - Core configuration file for a Node.js project. It includes metadata, scripts, dependencies, and versioning information for the project.

- **`README.md`**
  - A markdown file providing an overview of the project, including setup instructions, usage guidelines, and other important information you can add on here.

- **`tsconfig.json`**
  - Configuration file for TypeScript that specifies compiler options, file inclusions, and TypeScript version. It defines how the TypeScript code is compiled.

- **`webpack.config.js`**
  - Configuration file for Webpack, a module bundler. It defines how the project’s modules are compiled, bundled, and transformed.

<style>
  .centered {
    text-align: center;
  }
</style>
<div class="centered">
---------------------------------------------------------------------------------------------------------------------------------
<br></br>
🤖Done with Chat-GPT assistance🤖
<br></br>
❤️💻HAPPY CODING!!!💻❤️
<br></br>
---------------------------------------------------------------------------------------------------------------------------------
</div>