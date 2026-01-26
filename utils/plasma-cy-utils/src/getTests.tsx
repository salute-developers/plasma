import React, { ReactNode } from 'react';

import { mount } from './CypressHelpers';
import { getComponent, getDescribeFN, hasComponent } from './CypressDecorator';
import { getConfigMatrix } from './getConfigMatrix';

type GetBaseVisualTestsArgs = {
    component: string;
    componentProps: any;
    configPropsForMatrix?: string[];
    children?: ReactNode;
    testCaseIds?: string[];
};

const getConfig = (component: string): any => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
        return require(`src/examples/components/${component}/${component}.config.ts`).config;
    } catch {
        return null;
    }
};

export const getBaseVisualTests = ({
    testCaseIds,
    component,
    componentProps,
    children,
    configPropsForMatrix,
}: GetBaseVisualTestsArgs) => {
    const componentExists = hasComponent(component);
    const describeFn = getDescribeFN(component);

    return describeFn(`plasma-new-hope: ${component}`, () => {
        const Component = componentExists ? getComponent(component) : () => null;
        const config = componentExists ? getConfig(component) : null;
        const configMatrix = getConfigMatrix(config, configPropsForMatrix);

        configMatrix.forEach((combination, ind) => {
            const testId = testCaseIds?.at(ind) ? `${testCaseIds?.at(ind)} ` : '';
            const testParams = Object.entries(combination)
                .map(([propName, propValue]) => `${propName}=${propValue}`)
                .join(', ');

            it(`[PLASMA-${testId}]${component} ${testParams}`, () => {
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

                // @ts-ignore
                cy.matchImageSnapshot();
            });
        });
    });
};
