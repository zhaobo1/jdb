const path = require('path');
const WEBPACK = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//抽离CSS文件
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		index:["./src/main.js"]
	},
	output:{
		publicPath: '/',//解决CSS抽离之后，CSS中图片路径出错问题
		path:path.resolve(__dirname,'./dist'),
		filename:"js/bundle-[name].js"
	},
	module:{
		rules:[
			{ test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ ,query: { presets: ['es2015','react']}},
			{
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          //resolve-url-loader may be chained before sass-loader if necessary
		          use: ['css-loader', 'sass-loader']
		        })
		    },
			{
				test:/\.(png|jpg|gif|svg)$/i,
				use:[
				'url-loader?limit=1000&name=images/[name]-[hash:5].[ext]',
				'image-webpack-loader'
				]
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'./src/index.html',
			filename:'index.html',
			inject:'body',
			includeChunks:['index']
		}),
		new ExtractTextPlugin('css/[name].css')
	]
}