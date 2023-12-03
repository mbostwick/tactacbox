const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.tsx',
    devServer: {
        host: "local.tach.io",
        static: path.resolve(__dirname, "./dist"),
        hot: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },{
                test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }, {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }), ],
}