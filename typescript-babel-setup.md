# TypeScript Babel setup Guide

---

To create `package.json` file

```
    npm init
        or
    npm init -y
```

---

To create `typescript` configuration file

```
    tsc --init
```

Inside `tsconfig.json` file uncomment the `"noEmit": true` to allow babel to transform files.

---

To setup babel and it's cli install the following npm dependencies into your project folder

```
    npm install @babel/cli @babel/core --save-dev
    npm install @babel/preset-typescript @babel/preset-env --save-dev
    npm install typescript --save-dev
    npm install babel-loader --save-dev
    npm install webpack webpack-cli@3.3.12 webpack-dev-server --save-dev
```

---

create a babel config file named as `.babelrc` and paste the below lines.

```json
{
  "presets": ["@babel/preset-typescript", "@babel/preset-env"],
  "plugins": ["@babel/proposal-class-properties"]
}
```

---

create a webpack config file named as `webpack.config.js` and paste the below lines.

```js
const path = require("path");
module.exports = {
  entry: "./src/index.ts",

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  output: {
    publicPath: "public",
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
```

---

Add the below `script` into your `package.json`

```json
"scripts": {
    "bundle": "webpack",
    "build": "webpack --mode production",
    "serve": "webpack-dev-server --mode development --open",
    "tsc": "tsc"
}
```

---

To check typescript types run the below command

```
    npm run tsc
```

---

To see instant live changes use the below command

```
    npm run serve
```

---

To create bundled file use the below command

```
    npm run build
```
