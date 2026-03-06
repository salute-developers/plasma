import React, { ReactNode } from 'react';

import { mount } from './CypressHelpers';
import { getComponent, getDescribeFN, hasComponent } from './CypressDecorator';
import { getConfigMatrix } from './getConfigMatrix';

type GetBaseVisualTestsArgs = {
    component: string;
    componentProps: any;
    configPropsForMatrix?: string[];
    children?: ReactNode;
    actionBeforeSnapshot?: () => void;
    testCaseIds?: string[];
    propsForName?: string[];
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
    component,
    componentProps,
    children,
    actionBeforeSnapshot,
    configPropsForMatrix,
    propsForName,
}: GetBaseVisualTestsArgs) => {
    const componentExists = hasComponent(component);
    const describeFn = getDescribeFN(component);

    return describeFn(`${component}`, () => {
        const Component = componentExists ? getComponent(component) : null;
        if (!Component) {
            return;
        }

        const config = componentExists ? getConfig(component) : null;
        const configMatrix = getConfigMatrix(config, configPropsForMatrix);

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
