import React, { ReactNode } from 'react';

import { mount } from './CypressHelpers';
import { getComponent } from './CypressDecorator';
import { getConfigMatrix } from './getConfigMatrix';

type GetBaseVisualTestsArgs = {
    config: any;
    component: string;
    configPropsForMatrix?: string[];
    children?: ReactNode;
    testCaseIds?: string[];
};

export const getBaseVisualTests = ({
    testCaseIds,
    config,
    component,
    children,
    configPropsForMatrix,
}: GetBaseVisualTestsArgs) => {
    return describe(`plasma-new-hope: ${component}`, () => {
        const Component = getComponent(component);
        const configMatrix = getConfigMatrix(config, configPropsForMatrix);

        configMatrix.forEach((combination, ind) => {
            const testId = testCaseIds?.at(ind) ? `${testCaseIds?.at(ind)} ` : '';
            const testParams = Object.entries(combination)
                .map(([propName, propValue]) => `${propName}=${propValue}`)
                .join(', ');

            it(`${testId}${component} ${testParams}`, () => {
                mount(
                    <>
                        {children ? <Component {...combination}>{children}</Component> : <Component {...combination} />}
                    </>,
                );

                // @ts-ignore
                cy.matchImageSnapshot();
            });
        });
    });
};
