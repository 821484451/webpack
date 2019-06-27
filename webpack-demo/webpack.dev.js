const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
	}
});