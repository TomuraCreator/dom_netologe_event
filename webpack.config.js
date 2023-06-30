// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const miniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathPlugin = require("tsconfig-paths-webpack-plugin");
// const loader = require("mini-css-extract-plugin/types/loader");

const isProduction = process.env.NODE_ENV == "production";

module.exports = {
	target: 'web',
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
			template: "./index.html",
			filename: "./index.html",
			minify: {
				collapseWhitespace: false,
			}
    }),

		new TsconfigPathPlugin({
			configFile: "./tsconfig.json"
		})
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
			{
				exclude: ["/node_modules/"],
				test: /\.(ts|tsx)$/i,
				exclude: /node_modules/,
				use: {
					loader: ["ts-loader", "babel-loader"],
				},
				options: {
					transpileOnly: true,
				},

			},
			{
				test: /\.html/,
				use: [
					{
						loader: "html-loader"
					},
				]
			},

      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],

	},
};
