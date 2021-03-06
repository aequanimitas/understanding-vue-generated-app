### Understanding Vue.js Flow

Documentation on how the things are wired together within a generated app via
vue-cli, just tracing things out


##### Setting up dev environment
- do ```npm install --save-dev express opn```
- initial run/check, edit/create: ```vi build/dev-server.js``` then add this:
  ```
  require('express')().listen(9000, () => {
    require('opn')(`http://localhost:${this.address().port}`)
  })
  ```
- add npm script: ``` "dev": "node build/dev-server.js"```

##### Adding webpack and friends
-
- do ```npm install --save-dev webpack webpack-dev-middleware {html,friendly-errors}-webpack-plugin```
- ```npm install --save-dev eslint babel-core {babel,eslint,url}-loader```
- ```npm install --save-dev babel-{core,loader} babel-plugin-transform-runtime, babel-preset-{env,stage2}```
- create ```webpack.base.conf.js``` inside ```build/```
- ```config``` is now located on a file of its own, even ports


##### Integrating vue
- merge config.dev, needs .json
- css loaders in utils loads all style loaders for webpack
- on webpack confs rules, it's options not option
