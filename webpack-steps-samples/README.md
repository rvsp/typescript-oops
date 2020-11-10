# webpack steps

---

To create `typescript` configuration file

```
    tsc --init
```

To compile all `typescript` files to javascript

```
    tsc
```

---

To create `package.json` file

```
    npm init
        or
    npm init -y
```

---

To install `webpack, webpack-cli` in global

```
    npm install webpack webpack-cli -g
```

To install the following packages in current directory

```
    npm install webpack webpack-cli ts-loader typescript webpack-dev-server --save-dev
```

---

create a webpack config file `webpack.config.js` and the below line

```js
const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: "public",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
```

add the below `script` into your `package.json`

```json
"scripts": {
    "build": "webpack",
    "serve": "webpack-dev-server"
}
```

---

To run the `webpack-dev-server` use the below command

```
    npm run serve
```
