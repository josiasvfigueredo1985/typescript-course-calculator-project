## Typescript Advance Course Practices

- Here you find code from my practice with TS advanced course

## What you will find in this project?

- Auto bundling and running: When you perform any of execution options, the current typescript file will be bundled to a `js` file in the `dist/` folder, which will be created on the first run and overwrite the previous file on the following run and also will run the `js` file in the sequence;
- Linter: **\*EsLint** has some settings to help you to avoid common errors when writing code and also will suggest good practices to follow;
- Husky: Set to run lint before a commit, others commands can be added according your necessity
- Calculator application developed by HCode and enhanced by me, it runs and open automatically, use 'Run Calculator Application' on Run and Debug menu on VS Code
- Unit tests using Jest, these tests are supposed to test the main function of the application. it also used by by pre-commit configs that prevents broken code to be commited to main branch

## Execution Options

#### Easy way

1- Hit `F5` key.

#### Command Line

2 - Run following commands on terminal:

- `npx webpack --mode development src/your_folder/your_file.ts`
- `node dist/bundle.js`.

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

### Detailed Folder Structure and Configurations

#### Folders

- **`.husky`**

    - Pre-commit configurations, others settings can be added as well, such as pre-push and post-merge;
    - The "\_" folder store template files with proper names and extensions for each setting;
    - In order to add other setting, copy the template file to the ".husky" as done with "pre-commit" setting.

- **`.vscode`**

    - Json files with custom configurations, no need to change.

- **`dist`**

    - Folder that store the bundled typescript file.

- **`src/scripts`**
    - All scripts containing the basics of typescript, although they are all parametrized with eslint, which is configured as detailed below.

#### Files

- **`eslint.config.mjs`**

    - Main configuration file for ESLint, containing settings, rules, and plugins. You can customize this file according to your project’s linting requirements.

- **`.gitignore`**

    - Configuration file specifying files and directories to be ignored by Git. These items won’t be tracked or pushed to your repository.

- **`.prettierrc.json`**

    - Configuration file for Prettier, a code formatter. It contains formatting rules like line width, tab width, and style preferences, for this project only a basic configuration was set due ESLint rules already cover all the rest.

- **`tsconfig.json`**

    - Configuration file for TypeScript that specifies compiler options, file inclusions, and TypeScript version. It defines how the TypeScript code is compiled.

- **`webpack.config.js`**

    - Configuration file for Webpack, a module bundler. It defines how the project’s modules are compiled, bundled, and transformed.

- **`jest.config.ts`**
    - Configuration file for Jest, a testing framework. It includes settings for running tests with TypeScript, using `ts-jest` preset, and mapping module names for CSS and media files. It also specifies the test environment as `jsdom` and ignores the `dist` folder for tests.

<style>
  .centered {
    text-align: center;
  }
</style>

## <div class="centered">

<br></br>
🤖Done with Chat-GPT assistance🤖
<br></br>
❤️💻HAPPY CODING!!!💻❤️
<br></br>

---

</div>
