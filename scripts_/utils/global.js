"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pkg = exports.DIST_PATH = exports.SRC_PATH = exports.NODE_MODULES_PATH = exports.ROOT_PATH = void 0;
var path_1 = __importDefault(require("path"));
/** 根路径 */
exports.ROOT_PATH = process.cwd();
/** 第三方包路径 */
exports.NODE_MODULES_PATH = path_1.default.join(exports.ROOT_PATH, './node_modules');
/** 打包前文件存放路径 */
exports.SRC_PATH = path_1.default.join(exports.ROOT_PATH, './src');
/** 打包后文件存放路径 */
exports.DIST_PATH = path_1.default.join(exports.ROOT_PATH, './dist');
/** 包配置 */
exports.pkg = require(path_1.default.join(exports.ROOT_PATH, './package.json'));
