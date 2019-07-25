const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


const babel = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
	}
}

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [babel]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	] 
}