import React from 'react';
// Виртуальный модуль, резолвится плагином virtualTestConfigs в vite.config.ts.
// Содержит namespace-экспорты вида: export * as Button from '.../Button.config.ts'
// для всех компонентов текущего пакета.
// eslint-disable-next-line import/no-unresolved
import * as testConfigs from '@plasma-cy/test-configs';
import { mount } from './CypressHelpers';
import { getComponent, getDescribeFN, hasComponent } from './CypressDecorator';
import { getConfigMatrix } from './getConfigMatrix';
const getConfig = (component) => {
    var _a;
    const mod = testConfigs[component];
    return mod ? (_a = mod.config) !== null && _a !== void 0 ? _a : null : null;
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
export const getBaseVisualTests = ({ component, componentProps, children, actionBeforeSnapshot, configPropsForMatrix, excludePropsValues, propsForName, packagesForSkip, }) => {
    const componentExists = hasComponent(component);
    const pkgName = Cypress.env('package');
    const describeFn = (packagesForSkip === null || packagesForSkip === void 0 ? void 0 : packagesForSkip.includes(pkgName)) ? describe.skip : getDescribeFN(component);
    return describeFn(`${component}`, () => {
        const Component = componentExists ? getComponent(component) : null;
        if (!Component) {
            return;
        }
        const config = componentExists ? getConfig(component) : null;
        const configMatrix = getConfigMatrix(config, configPropsForMatrix, excludePropsValues);
        configMatrix.forEach((combination) => {
            const testParams = Object.entries(combination)
                .map(([propName, propValue]) => `${propName}=${propValue}`)
                .join(', ');
            const testName = propsForName ? `${testParams} ${propsForName}` : testParams;
            it(`${testName}`, () => {
                mount(React.createElement(React.Fragment, null, children ? (React.createElement(Component, Object.assign({}, combination, componentProps), children)) : (React.createElement(Component, Object.assign({}, combination, componentProps)))));
                actionBeforeSnapshot && actionBeforeSnapshot();
                // @ts-ignore
                cy.matchImageSnapshot();
            });
        });
    });
};
