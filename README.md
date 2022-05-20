# Live Demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/2c77aaf3-10bd-4ee1-9275-0aaf249d47df/deploy-status)](https://app.netlify.com/sites/github-topic-explorer-assessment/deploys)

A live demo can be found at [https://github-topic-explorer-assessment.netlify.app/](https://github-topic-explorer-assessment.netlify.app/)

# Getting Started

In order to get started, these steps must be followed:
1. Install dependencies
2. Add GraphQL Authorization Token
3. Run the app in the development mode

## Installing dependencies
In the project directory, you can run:
```sh
yarn install
```
or
```sh
npm install
```

## Authenticating with GraphQL
To communicate with the GraphQL server, you'll need an OAuth token with the right scopes.

Follow the steps in "[Creating a personal access token"](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create a token. The scopes you require depends on the type of data you're trying to request. For example, select the User scopes to request user data. If you need access to repository information, select the appropriate Repository scopes.

To match the behavior of the GraphQL Explorer, request the following scopes:

* user
* public_repo
* repo
* repo_deployment
* repo:status
* read:repo_hook
* read:org
* read:public_key
* read:gpg_key

The API notifies you if a resource requires a specific scope.

Once the token is generated, a **.env** file must be created in the root directory, storing the OAuth token as an environment variable, under the following key:
```sh
REACT_APP_ACCESS_TOKEN
```

## Run the app in the development mode

In the project directory, you can run:
```sh
yarn start
```
or
```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Additional Scripts
### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation].

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
