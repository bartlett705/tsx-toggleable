var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const makeHTML = new HtmlWebpackPlugin({
    template: './src/index.html'
});

module.exports = {
  entry: {
    app: ["./src/app/index.tsx"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/, loader: 'ts-loader'
        },
        {
        test: /\.sass$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    indentedSyntax: true,
                }
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
    }]
  },
  devServer: {
      contentBase: "./public",
  },
  plugins: [
    extractSass, makeHTML
  ]
};