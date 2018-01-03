/*
* @Author: zhangzhao
* @Date:   2018-01-02 17:46:42
* @Last Modified by:   zhangzhao
* @Last Modified time: 2018-01-02 17:49:35
*/
var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'webpack-print.js',
		library: 'webpack-print'
		libraryTarget: 'umd'
	},
	// externals: {
	// 	lodash: {
	// 		commonjs: 'lodash',
	// 		commonjs2: 'lodash',
	// 		amd: 'lodash',
	// 		root: '_'
	// 	}
	// }
};