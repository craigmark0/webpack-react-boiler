const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


const sass = {
	test: /\.scss$/,
	use: [
		"style-loader", // creates style nodes from JS strings
		"css-loader", // translates CSS into CommonJS
		"sass-loader" // compiles Sass to CSS, using Node Sass by default
	]
}

const css = {
	test: /\.css$/,
	use: ["style-loader", "css-loader"]
}

const babel = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
	}
}

const imageAssets = {
	test: /\.(png|svg|jpg|gif)$/,
	use: [
		'file-loader'
	]
}

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [babel, sass, css, imageAssets]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}