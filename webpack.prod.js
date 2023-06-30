const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require("./webpack.config");

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			// filename: './[name].html',
			minify: {
				collapseWhitespace: true,
			},
		}),
	],
});
