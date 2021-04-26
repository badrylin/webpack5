"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apps = void 0;
var fs_1 = __importDefault(require("fs"));
var global_1 = require("./global");
var ls = fs_1.default.readdirSync(global_1.SRC_PATH);
ls = ls.filter(function (app) { return app !== 'common'; });
exports.apps = ls;
