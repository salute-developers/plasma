import React, { ReactNode } from 'react';

import { mount } from './CypressHelpers';
import { getComponent, getDescribeFN, hasComponent } from './CypressDecorator';
import { getConfigMatrix } from './getConfigMatrix';

type GetBaseVisualTestsArgs = {
    /**
     * Имя компонента, используется для поиска конфига и регистрации describe-блока.
     */
    component: string;
    /**
     * Пропсы, которые будут переданы компоненту в каждом тест-кейсе.
     */
    componentProps: any;
    /**
     * Список пропов из конфига, которые войдут в матрицу. Если не указан — берутся все пропы.
     */
    configPropsForMatrix?: string[];
    /**
     * Значения пропов, исключаемые из матрицы. Ключ — имя пропа, значение — массив исключаемых значений.
     */
    excludePropsValues?: Record<string, string[]>;
    /**
     * Дочерние элементы, передаваемые внутрь компонента.
     */
    children?: ReactNode;
    /**
     * Действие, выполняемое перед снятием скриншота (например, открытие дропдауна).
     */
    actionBeforeSnapshot?: () => void;
    /**
     * Идентификаторы тест-кейсов для связи со внешней тест-документацией.
     */
    testCaseIds?: string[];
    /**
     * Пропы, значения которых включаются в имя теста.
     */
    propsForName?: string[];
    /**
     * Список пакетов, для которых тесты будут пропущены через describe.skip.
     */
    packagesForSkip?: string[];
};

const getConfig = (component: string): any => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
        return require(`src/examples/components/${component}/${component}.config.ts`).config;
    } catch {
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
export const getBaseVisualTests = ({
    component,
    componentProps,
    children,
    actionBeforeSnapshot,
    configPropsForMatrix,
    excludePropsValues,
    propsForName,
    packagesForSkip,
}: GetBaseVisualTestsArgs) => {
    const componentExists = hasComponent(component);
    const pkgName = Cypress.env('package') as string;

    const describeFn = packagesForSkip?.includes(pkgName) ? describe.skip : getDescribeFN(component);

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
                mount(
                    <>
                        {children ? (
                            <Component {...combination} {...componentProps}>
                                {children}
                            </Component>
                        ) : (
                            <Component {...combination} {...componentProps} />
                        )}
                    </>,
                );

                actionBeforeSnapshot && actionBeforeSnapshot();

                // @ts-ignore
                cy.matchImageSnapshot();
            });
        });
    });
};
