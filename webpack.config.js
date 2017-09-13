const path = require('path');
const WEBPACK = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//抽离CSS文件
const htmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');//文件压缩
module.exports = {
	entry:{
		index:["./src/main.js"],
		reacts:['react','react-router','react-dom'],//将第三方包打包在一个独立的文件中
		jquerys:['jquery']
	},
	output:{
		publicPath: '/',//解决CSS抽离之后，CSS中图片路径出错问题
		path:path.resolve(__dirname,'./dist'),
		filename:"js/bundle-[name].js"
	},
	devServer:{
		hot:true,
		inline:true
	},
	module:{
		rules:[
			{ test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ ,query: { presets: ['es2015','react']}},
			{
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          //resolve-url-loader may be chained before sass-loader if necessary
		          use: ['css-loader?minimize=true', 'sass-loader','postcss-loader']
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
		new BabiliPlugin(),//js文件压缩
		new WEBPACK.optimize.CommonsChunkPlugin({
			names:['reacts','jquerys','runtime'],
			//name:'vendor',
			//filename:'vendor.js',
			//minChunks:Infinity
			//没有被修改过的公有代码或库代码打包出的Entry Chunk，会随着其他业务代码的变化而变化，导致页面上的长缓存机制失效。
		}),
		new ExtractTextPlugin('css/[name].css')
	]
}