import React from 'react';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import cypress from 'cypress';

import { Loader as LoaderB2C } from '.';

const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
    <CypressTestDecorator>{children}</CypressTestDecorator>
);

describe('plasma-b2c: Loader', () => {
    const Loader = getComponent('Loader') as typeof LoaderB2C;

    const Demo = ({
        size = 'm',
        view = 'default',
        hasBlur = false,
        hasOverlay = false,
        type = 'progress',
        value = 50,
        ...rest
    }: ComponentProps<typeof Loader>) => {
        return (
            <Loader
                size={size}
                view={view}
                hasBlur={hasBlur}
                hasOverlay={hasOverlay}
                type={type}
                value={value}
                {...rest}
            />
        );
    };

    it('Loader: default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('Loader: default, size="xl", strokeWidth="8"', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xl" strokeSize={8}>
                    50%
                </Demo>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('Loader: default type=spinner', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo type="spinner" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('Loader: default type=spinner, size="xl', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo type="spinner" size="xl" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
