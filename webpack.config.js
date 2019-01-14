const WebpackHtmlPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, path.resolve("./dist")),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules(?!\/startbootstrap-agency)/,
				loader: "babel-loader"
			},
			{
				test: /.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)$/,
				loader: "file-loader",
				options: {
					outputPath: 'assets'
				}
			}
		]
	},
	plugins: [
		new WebpackHtmlPlugin({
			hash: true,
			template: "./src/template.html"
		}),
		new CopyWebpackPlugin([{
			from: 'src/img', 
			to: 'assets',
		}])
	],
	resolve: {
		extensions: [".js", ".jsx"]
	}
};