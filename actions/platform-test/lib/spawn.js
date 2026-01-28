"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnCyCommand = void 0;
var child_process_1 = require("child_process");
var helpers_1 = require("./helpers");
function spawnCyCommand(command, args) {
    helpers_1.log('spawn command', command);
    helpers_1.log('spawn args', args);
    return new Promise(function (resolve, reject) {
        var proc = child_process_1.spawn('cypress', __spreadArrays([command, '--browser', 'chromium'], args), {
            env: process.env,
            stdio: 'inherit',
            detached: false,
        });
        proc.on('exit', function (code, signal) {
            if (code === 0) {
                resolve(0);
            }
            reject(signal);
        });
        proc.on('error', function (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            reject(error);
        });
    });
}
exports.spawnCyCommand = spawnCyCommand;
//# sourceMappingURL=spawn.js.map