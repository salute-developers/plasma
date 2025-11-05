"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountLegacyMode = void 0;
var react_1 = require("@cypress/react");
// INFO: для временного использования в plasma-ui
var mountLegacyMode = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var jsx = args[0], _a = args[1], opts = _a === void 0 ? {} : _a;
    opts.stylesheets = ((opts === null || opts === void 0 ? void 0 : opts.stylesheets) || []).concat('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css', 'https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css');
    var cm = (0, react_1.mount)(jsx, opts);
    cy.waitForResources('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.2.0.css');
    cy.waitForResources('https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.2.0.css');
    cy.waitForResources('SBSansText.0.2.0.css', 'SBSansDisplay.0.2.0.css', { timeout: 1500 });
    return cm;
};
exports.mountLegacyMode = mountLegacyMode;
