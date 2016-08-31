Web application for Wee project
----------------

### prerequisite
* install nodejs 6, the url is:[https://nodejs.org/en/](https://nodejs.org/en/)

### install dependencies
`npm install`

### How to run?
`npm start`

### Tech stack
* nodejs 6, local runtime for javascript
* npm 3, for dependency management and build tasks
* [expressjs](https://expressjs.com/), used to server the static files and act like a mocked backend
* [reactjs](https://facebook.github.io/react/), used to handle the view
* [redux](https://github.com/reactjs/redux)，for frontend data flow
* [babeljs](http://babeljs.io/), used to compile jsx and es2015 to plain javascript
* [es2015](http://babeljs.io/docs/learn-es2015/), the language
* [webpack](https://webpack.github.io/), used to serve local files and package the static files

### guides
Apart from the websites listed in previous section, there are some good guides:
* redux, [http://redux.js.org/index.html](http://redux.js.org/index.html)
* react, [https://facebook.github.io/react/docs/tutorial.html](https://facebook.github.io/react/docs/tutorial.html), [http://www.infoq.com/cn/articles/react-art-of-simplity/](http://www.infoq.com/cn/articles/react-art-of-simplity/)

### TODOs
* CSS
* Async request

some docs:
* webpack-dev-middleware,"The webpack-dev-middleware is a small middleware for a connect-based middleware stack. It uses webpack to compile assets in-memory and serve them. When a compilation is running every request to the served webpack assets is blocked until we have a stable bundle. "[https://webpack.github.io/docs/webpack-dev-middleware.html](https://webpack.github.io/docs/webpack-dev-middleware.html)
* webpack-hot-middleware, "This module is only concerned with the mechanisms to connect a browser client to a webpack server & receive updates. It will subscribe to changes from the server and execute those changes using webpack's HMR api. Actually making your application capable of using hot reloading to make seamless changes is out of scope, and usually handled by another library. "[https://github.com/glenjamin/webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)"

