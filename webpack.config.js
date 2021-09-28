const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { VueLoaderPlugin } = require('vue-loader')

const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'assets/d2rw': './src/index.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: 'assets/js/[name].js?[chunkhash]',
        assetModuleFilename: '[path][name][ext][query]',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    module: {
        rules: [{
            test: /\.(t|m?j)s$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.yaml$/,
            type: 'json',
            loader: 'yaml-loader'
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../../',
                    },
                },
                { loader: 'css-loader' },
                { loader: 'postcss-loader' },
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData: '$debug: false;',
                    },
                },
            ],
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff2?|mp4|vtt|mp3|wav|ogg)$/,
            type: 'asset/resource',
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor'
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.scss', '.yaml'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@App': path.resolve(__dirname, 'src'),
            '@Asset': path.resolve(__dirname, 'assets'),
            '@Image': path.resolve(__dirname, 'assets/images'),
            '@Scss': path.resolve(__dirname, 'assets/scss')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new VueLoaderPlugin()
    ]
}
