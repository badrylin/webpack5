import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { Configuration, webpack } from "webpack";
import { DIST_PATH, ROOT_PATH } from './utils/global';
import { tsLoaders } from "./loader/tsLoaders";
import { apps } from "./utils/appLoader";

const entry = {}

apps.forEach(app => {
    entry[app] =  path.join(ROOT_PATH, `./src/${app}/index.ts`)
});

const config: Configuration = {
    mode: "none",
    entry,
    module: {
        rules: [
            ...tsLoaders(),
        ]
    },
    output: {
        path: DIST_PATH,
        filename: "[name]/js/[name].[chunkhash:7].js",
        publicPath: "../",
        chunkFilename: "common/js/[name].[chunkhash:7].bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin()
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

webpack(config, (e) => {})

