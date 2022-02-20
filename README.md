# GraphQL の学習

参考のサイト:[Writing a Node.js GraphQL backend that actually scales — A complete guide](https://javascript.plainenglish.io/writing-a-node-js-graphql-backend-that-actually-scales-a-complete-guide-part-1-setup-cddceae25bdc)

## プロジェクト初期化

```
mkdir graphql-backend-graphql
cd graphql-backend-graphql
npm init -y
```

パッケージインストール
`@babel/core @babel/node @babel/preset-env nodemon -D`

- @babel/core : コンパイルの核となるパッケージ
- @babel/node : node コマンドの代わりに babel-node コマンドを利用できるようにするパッケージ
- @babel/preset-env :

## ファイル構成

```
config
|-environment
graphql
|-resolvers
| |-index.js
|-typeDefs
| |-index.graphql
| |-index.js
.babelrc
.env
app.js
index.js
packade.json
```

## パッケージインストール

`npm i express apollo-server-express graphql @graphql-tools/schema dotenv`
