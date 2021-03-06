const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue'], // 확장자를 표기하지 않아도 가능하도록
        alias: { // 경로 별칭 설정
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },

    entry: './src/main.js',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
        new VueLoaderPlugin()
    ],

    devServer: {
        host: 'localhost'
    }
}