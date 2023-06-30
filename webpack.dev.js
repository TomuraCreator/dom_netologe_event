const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(common, {
	mode: "development",

	devServer: {
		compress: true,
		historyApiFallback: true,
		open: true,
		host: "localhost",
	},
	plugin: [
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin({
			files: path.resolve(__dirname, "./src/js"),
		})
	],
});
