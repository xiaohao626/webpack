const path = require('path');

module.exports = {
  entry: __dirname + "/src/main.js", // 唯一入口文件
  output: {
    path: __dirname + "/dist", // 打包后文件存放的位置
    filename: "bundle.js", // 打包后文件的名字
  },
  mode: "development", // 设置mode
  module: {
    rules: [{
      test: /\.js$/,
      use: [path.resolve(__dirname, './loaders/replaceMent.js')]
    }]
  }
};
