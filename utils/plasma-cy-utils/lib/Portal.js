"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Portal = function (_a) {
    var id = _a.id, children = _a.children;
    var el = document.createElement('div');
    (0, react_1.useEffect)(function () {
        var portalRoot = document.getElementById(id);
        portalRoot && portalRoot.appendChild(el);
        return function () {
            portalRoot && portalRoot.removeChild(el);
        };
    }, [el, id]);
    return (0, react_dom_1.createPortal)(children, el);
};
exports.Portal = Portal;
