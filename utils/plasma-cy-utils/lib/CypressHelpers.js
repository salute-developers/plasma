"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@cypress/react");
var CypressDecorator_1 = require("./CypressDecorator");
var mount = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var jsx = args[0], _a = args[1], opts = _a === void 0 ? {} : _a;
    return (0, react_2.mount)(react_1.default.createElement(CypressDecorator_1.CypressTestDecorator, null, jsx), opts);
};
exports.mount = mount;
