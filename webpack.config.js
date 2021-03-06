const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash].js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [

	
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},

			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							import: true,
							modules: true,
						}
					}
				]
			},
			{
				test: /\.sass$/,
				use: [
					{
                                                loader: 'sass-loader',
                                                options: {
                                                        implementation: require('sass'),
                                                        sassOptions: {
                                                                fiber: false,
                                                        }
                                                }
                                        }
				]
			},
			{
				test: /\.(png|jpe?g|gif|ttf|eot|svg)$/,
				use: [	
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]?[hash]',
							outputPath: 'img/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			favicon: 'public/favicon.ico'
		})
	],devServer: {
		host: '0.0.0.0',
		port: port,
		historyApiFallback: true,
		open: true
	}
};
