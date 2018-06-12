const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new (require('html-webpack-plugin'))
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8000
    }
};
