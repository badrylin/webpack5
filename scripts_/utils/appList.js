"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appList = void 0;
var fs_1 = __importDefault(require("fs"));
var global_1 = require("./global");
exports.appList = (function () {
    console.log(1);
    return fs_1.default.readdirSync(global_1.SRC_PATH).filter(function (app) { return app !== 'common'; });
})();
