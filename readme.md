# Github web app
[![travisci](https://travis-ci.com/santosfrancisco/github-web-app.svg?branch=master)](https://travis-ci.com/santosfrancisco/github-web-app.svg?branch=master)
[![codecov](https://codecov.io/gh/santosfrancisco/github-web-app/branch/master/graph/badge.svg)](https://codecov.io/gh/santosfrancisco/github-web-app)

>Demo [https://githubwebapp.netlify.com](https://githubwebapp.netlify.com)

Web application created using ReactJS that queries a user's repositories on Github and also allows browsing through the commits of these repositories.

## ES6+ features

- **Arrow functions:** were used to facilitate development by avoiding creating function binds in the React component builder.

- **Destructuring:** using destructuring makes code more readable, especially when using `props` or `state` variables, making it clear at the beginning of the component which variables are used.

## Tecnologies

- [React](https://reactjs.org/) - Interface development
- [Redux](https://redux.js.org/) - Application state control
- [Storybook](https://storybook.js.org/) - Isolated environment for component development
- [Jest](https://jestjs.io/) - Tests framework
- [Enzyme](https://airbnb.io/enzyme/) - Test utilities
- [React router](https://reacttraining.com/react-router) - Routes control
- [Styled-components](https://www.styled-components.com/) - CSSinJS for component styling
- [Webpack](https://webpack.js.org/) - Module bundler
- [Babel](https://babeljs.io/) - Transpiler

## How to run the project

First, install all dependencies running `yarn install`ou `npm install`.

In the root folder, run this command `yarn start` or` npm start` and the project will be automatically opened in the default browser, if not, just access the address [http://localhost:8080](http://localhost:8080)

To create the production build, simply run `yarn build` or` npm run build`, and a build optimized for production will be created in the `/dist` directory using the webpack.

## Tests

The unit test suite was developed using Jest + Enzyme. To run the tests, run the command `yarn test` or` npm test`

To generate the coverage dashboard run the command `yarn coverage` or` npm run coverage`. This command will generate the covereage dashboard in the `/coverage` directory and to view it, simply open the` /coverage/lcov-report/index.html` file in the browser.

## Storybook

To facilitate component development, the Storybook library was used. Storybook is a tool for developing components in isolation, making it quick and easy to develop and view your application itself.

To run Storybook and view the component library, simply run the command `yarn storybook` or` npm run storybook` and the Storybook browser interface will automatically open, and if not, just go to the address [http://localhost:6006](http://localhost:6006)
