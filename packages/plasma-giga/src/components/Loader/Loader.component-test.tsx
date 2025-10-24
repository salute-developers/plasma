import React from 'react';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import cypress from 'cypress';

import { Loader as LoaderB2C } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
    <CypressTestDecorator>
        <StandardTypoStyle />
        {children}
    </CypressTestDecorator>
);

describe('plasma-b2c: Loader', () => {
    const Loader = getComponent('Loader') as typeof LoaderB2C;

    const Demo = ({
        size = 'm',
        view = 'default',
        hasBlur = true,
        hasOverlay = true,
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
                <Demo size="xl" strokeWidth={8}>
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

    it('Loader: customOverlayColor', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo overlayColor="red" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
