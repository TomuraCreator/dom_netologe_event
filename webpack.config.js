// Generated using webpack-cli https://github.com/webpack/webpack-cli
process.traceDeprecation = true;
const path = require("path");
const TsconfigPathPlugin = require("tsconfig-paths-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // https://webpack.js.org/plugins/copy-webpack-plugin/
const HtmlWebpackPlugin = require("html-webpack-plugin");
//Node:  HtmlWebpackPlugin() - расскоментировать чтоб запустить webpack.dev.js
//Node:  HtmlWebpackPlugin() - закоментировать чтоб запустить webpack.prod.js

require("webpack-dev-server");

module.exports = {
	mode: 'none',
	target: 'web',
	entry: "./src/index.js",

	output: {
		path: path.resolve(__dirname, "dist"),
	},


	module: {
		rules: [
			{
				test: /\.ts$/i,
				exclude: /node_modules/,
				use: "ts-loader",

			},
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: [
					{ loader: "babel-loader" },
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset/ressource",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},

	plugins: [

		new CopyPlugin({
			patterns: [
				{
					from: './src/pic',
					to: './pic'
				}
			]
		}),

		new TsconfigPathPlugin({
			configFile: "./tsconfig.json"
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/

		// new HtmlWebpackPlugin({
		// 	template: "./src/index.html",
		// 	filename: "./index.html",
		// 	minify: {
		// 		collapseWhitespace: false,
		// 	}
		// }),
	],

	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],

	},
};
