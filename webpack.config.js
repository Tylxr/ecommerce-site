const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = true; //TODO: Implement environments

const sassLoaders = ['css-loader', 'sass-loader'];
sassLoaders.unshift(isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader);

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: sassLoaders
            },
            {
                test: /\.jpg$/,
                exclude: /node_modules/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.ttf', '.jpg'],
        modules: ['node_modules'],
        alias: {
            assets: path.join(__dirname, 'src/assets')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? 'id.css' : '[id].[hash].css'
        })
    ],
    devtool: 'source-map'
};