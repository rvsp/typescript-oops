# TypeScript Babel setup Guide

---

To create `typescript` configuration file

```
    tsc --init
```

Inside `tsconfig.json` file uncomment the `"noEmit": true` to allow babel to transform files.

---

To create `package.json` file

```
    npm init
        or
    npm init -y
```

---

To setup babel and it's cli install the following npm dependencies into your project folder

```
    npm install -D @babel/cli @babel/cli
```

```
    npm i -D @babel/preset-typescript @babel/preset-env
    npm i -D typescript
```

---

create a babel config file named as `.babelrc` and paste the below lines.

```json
{
  "presets": ["@babel/preset-typescript", "@babel/preset-env"],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
```

Add the below `script` into your `package.json`

```json
"scripts": {
    "build": "babel src --out-dir dist --extensions \".ts,.tsx\" --copy-files",
    "tsc": "tsc"
}
```

---

To run the `babel` use the below command

```
    npm run build
```
