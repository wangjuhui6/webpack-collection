const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack: (config) => {
    return {
      module: {
        rules: [
          {
            test: /\.md$/,
            use: [
              "vue-loader",
              "@wjh/vue-demo-md-plugin",
              "markdown-loader",
            ],
          },
        ],
      }
    };
  }
});
