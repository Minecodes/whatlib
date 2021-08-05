"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issymb = exports.isstr = exports.isobj = exports.isnum = exports.isfunc = exports.isbool = void 0;
var isbool_1 = __importDefault(require("./if/isbool"));
exports.isbool = isbool_1.default;
var isfunc_1 = __importDefault(require("./if/isfunc"));
exports.isfunc = isfunc_1.default;
var isnum_1 = __importDefault(require("./if/isnum"));
exports.isnum = isnum_1.default;
var isobj_1 = __importDefault(require("./if/isobj"));
exports.isobj = isobj_1.default;
var isstr_1 = __importDefault(require("./if/isstr"));
exports.isstr = isstr_1.default;
var issymb_1 = __importDefault(require("./if/issymb"));
exports.issymb = issymb_1.default;
