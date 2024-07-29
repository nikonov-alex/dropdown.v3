const path = require('path');

module.exports = {
    entry: './sources/index.tsx',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules\/(?!(@nikonov-alex\/frontend)\/).*/,
                use: "ts-loader"
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    output: {
        filename: 'index.js',
        path: path.resolve( "./build" ),
        library: {
            type: "module"
        }
    },
    experiments: {
        outputModule: true,
    },
    optimization: {
        minimize: true
    }
};