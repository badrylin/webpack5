"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var clean_webpack_plugin_1 = require("clean-webpack-plugin");
var webpack_1 = require("webpack");
var global_1 = require("./utils/global");
var tsLoaders_1 = require("./loader/tsLoaders");
var appLoader_1 = require("./utils/appLoader");
var entry = {};
appLoader_1.apps.forEach(function (app) {
    entry[app] = path_1.default.join(global_1.ROOT_PATH, "./src/" + app + "/index.ts");
});
var config = {
    mode: "none",
    entry: entry,
    module: {
        rules: __spreadArray([], tsLoaders_1.tsLoaders())
    },
    output: {
        path: global_1.DIST_PATH,
        filename: "[name]/js/[name].[chunkhash:7].js",
        publicPath: "../",
        chunkFilename: "common/js/[name].[chunkhash:7].bundle.js",
    },
    plugins: [
        new clean_webpack_plugin_1.CleanWebpackPlugin()
    ],
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            maxInitialRequests: 3,
            maxAsyncRequests: 5,
            minChunks: 1,
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    name: 'common',
                    minSize: 1,
                    test: /([\\/]node_modules[\\/])/,
                    priority: -10,
                }
            }
        }
    },
};
webpack_1.webpack(config, function (e) { });
