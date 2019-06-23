module.exports = {
    entry: './assets/js/src/scripts.js', // input file
    output: { path: __dirname, filename: 'bundle.js' }, // output bundle
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // preset js es6+
                    }
                }
            }
        ]
    },
    stats: { colors: true }, // color output 
    devtool: 'source-map', // facilita localizar o código compilado
    mode: 'production'
};



