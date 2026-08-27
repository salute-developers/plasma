"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseVisualTests = void 0;
var react_1 = __importDefault(require("react"));
var CypressHelpers_1 = require("./CypressHelpers");
var CypressDecorator_1 = require("./CypressDecorator");
var getConfigMatrix_1 = require("./getConfigMatrix");
var getConfig = function (component) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
        return require("src/examples/components/".concat(component, "/").concat(component, ".config.ts")).config;
    }
    catch (_a) {
        return null;
    }
};
/**
 * Генерирует базовые визуальные тесты для компонента.
 * Генерирует describe-блок с именем компонента, внутри которого будет
 * сгенерирован тест-кейс для каждого варианта комбинации пропов из
 * конфига.
 * Каждый тест-кейс будет сгенерирован с именем, соответствующим
 * значению пропов, указанных в конфиге.
 * Внутри каждого тест-кейса будет смонтирован компонент с указанными
 * пропами, а также с указанными дочерними элементами.
 * Перед снятием скриншота будет выполнено указанное действие.
 * @param {string} component - имя компонента, используется для поиска конфига и регистрации describe-блока.
 * @param {any} componentProps - пропсы, которые будут переданы компоненту в каждом тест-кейсе.
 * @param {ReactNode} children - дочерние элементы, передаваемые внутрь компонента.
 * @param {() => void} actionBeforeSnapshot - действие, выполняемое перед снятием скриншота.
 * @param {string[]} configPropsForMatrix - список пропов из конфига, которые войдут в матрицу.
 * @param {Record<string, string[]>} excludePropsValues - значения пропов, исключаемые из матрицы.
 * @param {string[]} propsForName - пропсы, значения которых включаются в имя теста.
 * @param {string[]} packagesForSkip - список пакетов, для которых тесты будут пропущены через describe.skip.
 */
var getBaseVisualTests = function (_a) {
    var component = _a.component, componentProps = _a.componentProps, children = _a.children, actionBeforeSnapshot = _a.actionBeforeSnapshot, configPropsForMatrix = _a.configPropsForMatrix, excludePropsValues = _a.excludePropsValues, propsForName = _a.propsForName, packagesForSkip = _a.packagesForSkip;
    var componentExists = (0, CypressDecorator_1.hasComponent)(component);
    var pkgName = Cypress.env('package');
    var describeFn = (packagesForSkip === null || packagesForSkip === void 0 ? void 0 : packagesForSkip.includes(pkgName)) ? describe.skip : (0, CypressDecorator_1.getDescribeFN)(component);
    return describeFn("".concat(component), function () {
        var Component = componentExists ? (0, CypressDecorator_1.getComponent)(component) : null;
        if (!Component) {
            return;
        }
        var config = componentExists ? getConfig(component) : null;
        var configMatrix = (0, getConfigMatrix_1.getConfigMatrix)(config, configPropsForMatrix, excludePropsValues);
        configMatrix.forEach(function (combination) {
            var testParams = Object.entries(combination)
                .map(function (_a) {
                var propName = _a[0], propValue = _a[1];
                return "".concat(propName, "=").concat(propValue);
            })
                .join(', ');
            var testName = propsForName ? "".concat(testParams, " ").concat(propsForName) : testParams;
            it("".concat(testName), function () {
                (0, CypressHelpers_1.mount)(react_1.default.createElement(react_1.default.Fragment, null, children ? (react_1.default.createElement(Component, __assign({}, combination, componentProps), children)) : (react_1.default.createElement(Component, __assign({}, combination, componentProps)))));
                actionBeforeSnapshot && actionBeforeSnapshot();
                // @ts-ignore
                cy.matchImageSnapshot();
            });
        });
    });
};
exports.getBaseVisualTests = getBaseVisualTests;
