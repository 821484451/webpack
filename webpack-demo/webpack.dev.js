

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		port: 9000
	},
	plugins:[new ExtractTextPlugin("styles.css")],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						"css-loader",
            			"postcss-loader"
					]
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use:[{
							loader:'css-loader'
						},{
							loader:'less-loader'
						}],
					fallback:'style-loader'
				})
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					use:[{
							loader:'css-loader'
						},{
							loader:'sass-loader'
						}],
					fallback:'style-loader'
				})
			}
		]
	}
};