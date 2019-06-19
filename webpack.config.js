
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './assets/js/src/scripts.js', // input file
    output: { path: __dirname, filename: 'bundle.js' }, // output bundle
    module: {
        loaders: [{ // carregados durante o processo
            loader: 'babel-loader', // babel para transpilar JS
            test: path.join(__dirname, 'assets/js/src'), // diretórios a serem buscados
            query: { presets: 'es2015' } // preset de ES6
        }]
    },
    plugins: [new webpack.NoErrorsPlugin()], // plugins não adicionar arquivo qdo der erro
    stats: { colors: true }, // color output 
    devtool: 'source-map', // facilit localizar o código compilado
};



