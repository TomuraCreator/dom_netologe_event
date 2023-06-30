const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config');

module.exports = merge(common, {
	mode: 'productions',
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html',
			filename: './index.html',
			minify: {
				collapseWhitespace: true,
			},
		}),
	],
});
