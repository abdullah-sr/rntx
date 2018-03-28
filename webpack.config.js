const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');

const config = {
    cache: true,
    entry: ['babel-polyfill', `${APP_DIR}/js/main.js`],
    output: {
        path: BUILD_DIR,
        filename: 'js/app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: APP_DIR,
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: { loader: 'style-loader' },
                    use: { loader: 'css-loader' },
                    publicPath: '/../',
                }),
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: './images/',
                    },
                },

            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: './fonts/',
                    },
                },
            },
        ],
    },
    plugins: [
        new HTMLPlugin({
            template: `${APP_DIR}/index.html.ejs`,
            filename: `${BUILD_DIR}/index.html`,
            hash: true,
            inject: 'head',
        }),

        new ExtractTextPlugin({
            filename: 'css/styles.css',
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
        }),
        new CleanWebpackPlugin([BUILD_DIR]),
        new webpack.ProvidePlugin({
            THREE: `${APP_DIR}/js/three`,
            anime: 'animejs',
        }),
        // new BundleAnalyzerPlugin(),
    ],
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new UglifyJsPlugin());
}

module.exports = config;
