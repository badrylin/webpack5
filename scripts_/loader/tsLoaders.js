"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsLoaders = void 0;
var path_1 = __importDefault(require("path"));
var global_1 = require("../utils/global");
var tsLoaders = function () {
    return [{
            test: /\.(ts|tsx)$/,
            include: [path_1.default.join(global_1.ROOT_PATH, './src')],
            use: 'ts-loader',
        }];
};
exports.tsLoaders = tsLoaders;
