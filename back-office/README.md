# Back office

## Built with

- Reactjs, to build an app following the atomic design principle
- Axios, to fetch data from API
- React-router-dom, a router for react
- React-trello, to handle drag and drop
- Styled-components, to style react components
- ESLint and prettier, to work together with the same syntax
- Storybook, to get a full documentation on our react components

## Storybook

### Storybook documentation

Storybook is a user interface who runs outside the main app for create his components independently and showcase components interactively & graphically.

See all documentation [here](https://storybook.js.org/docs/basics/introduction/)

### Getting started

Link to the Storybook back-office [here]()

### How it works

At the root of the back-office project, in the `.storybook` folder, we decided to put all the storybook configuration files.

The `main.js` file contain the general configuration of the storybook. It is made up of all
addons et dependencies to start the storybook.

The `manager.js`and `myTheme.js` are to files required if we want to modify and stylize the storybook general theme.

`preview.js` is the most important file because it allows to find all stories files from multiple locations and allows to integrate some logic like the `ThemeProvider.js` wich serves here to create a theme provider decoration ( styled-component )

All stories are in the `stories` folder at the root of the back-office and have the same names as the components names.

## Authors

Marion Ott
Anthony Reynaud
Simon Soleau
