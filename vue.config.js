// vue.config.js
//  const { defineConfig } = require("@vue/cli-service");
//  module.exports = defineConfig({
//    transpileDependencies: true,
//  });

const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
});
