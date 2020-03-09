const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path');

const config = {
    entry : {
        index : "./src/index.jsx",
    },

    output: {
        path : path.resolve(__dirname,'dist'),
        filename : '[name][hash].js',
        publicPath : "/"
    },
    
    devServer: {
        historyApiFallback: true,
    },

    resolve: {
        extensions : ['.js','.jsx','.css','.sass', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/, 
                use:'babel-loader'
            },
            {
                test: /\.(png|gif|jpg|pdf)$/,
                use: 'file-loader'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.(mp4|flv|webm)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|ttf|otf|eot)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options:{
                    name: '[path][name].[ext]'
                }
            },
            {
                test:/\.css$/, 
                use: ['style-loader', ExtractCssChunksPlugin.loader,'css-loader', 'postcss-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', ExtractCssChunksPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist',{}),
        new CopyWebpackPlugin([
            {
                from: './server.py',
                to: './'
            }
        ]),
        new ExtractCssChunksPlugin({
            filename:"[name][hash].css",
            chunkFilename:"[name][id][hash].css"
        }),
        new HtmlWebpackPlugin({
            chunks: ["index"],
            title : "Ganga",
            filename : "index.html",
            template : "./assets/templates/index.html",
            minify : {
                removeComments : true,
                collapseWhitespace : true,
                conservativeCollapse : true,

            },
        }),
    ]
}

module.exports = config;