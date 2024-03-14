# Exercice AlloVoisins : Vue 3 + TypeScript + Vite

[![forthebadge made-with-vue](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://vuejs.org/)

[![forthebadge made-with-vue](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://vuejs.org/)

## Run the app

To run the app, you just have to type in the the terminal :
`npm run dev`
The app will run [here](http://localhost:5173)

## How the App works

The interface is split in two parts :

- A list of articles
- A form to edit or add article

When the form is empty you can add a new article by filling all the inputs and click on the submit button.
To edit an article, click on it in the list on the right side, it will fill all the inputs by the articles'data. Now you can change the name, the price and the tax. Click on the submit button to edit the article.
If you clicked on an article and decide nevertheless to add a new article, click a second time on the item to empty the inputs. Now you can fill them to add a new article.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
