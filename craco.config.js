const CracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "@c": resolve("src/components"),
      "@p": resolve("src/pages")
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#3d6fd3' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}