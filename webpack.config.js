const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: ['babel-polyfill', './src/components/Index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: './src/index.html'
        }
    )]
};

module.exports = config;