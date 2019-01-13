const WebpackHtmlPlugin = require("html-webpack-plugin");
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
				use: "babel-loader"
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
				use: "file-loader"
			}
		]
	},
	plugins: [
		new WebpackHtmlPlugin({
			hash: true,
			template: "./src/template.html"
		})
	],
	resolve: {
		extensions: [".js", ".jsx"]
	}
};