import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { IconBell } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const Icon = () => <IconBell color="inherit" size="xs" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-giga: Toast', () => {
    const Toast = getComponent('Toast');
    const useToast = getComponent('useToast');
    const ToastProvider = getComponent('ToastProvider');
    const Button = getComponent('Button');

    const Interactive = ({ text: _text, view, size, position, timeout, pilled, hasClose, enableContentLeft }) => {
        const { showToast } = useToast();
        const ContentLeft = enableContentLeft && <Icon />;
        const onShowToast = () =>
            showToast({
                text: _text,
                view,
                size,
                pilled,
                position,
                timeout,
                hasClose,
                contentLeft: ContentLeft,
            });

        return <Button id="show" text="show" onClick={onShowToast} />;
    };

    const CypressTestDecoratorWithToast: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            <ToastProvider>{children}</ToastProvider>
        </CypressTestDecorator>
    );

    it('[PLASMA-T1713] Toast: size=m, view=default, with Text, with close', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <Interactive
                    text="Toast message"
                    view="default"
                    size="m"
                    position="top"
                    pilled={false}
                    hasClose
                    enableContentLeft={false}
                />
            </CypressTestDecoratorWithToast>,
        );
        cy.get('#show').click();
        cy.get('div').contains('Toast message');
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1714] Toast: size=m, view=positive, noText, enableContentLeft', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <Interactive
                    text=" "
                    view="positive"
                    size="m"
                    position="top"
                    pilled={false}
                    hasClose={false}
                    enableContentLeft
                />
            </CypressTestDecoratorWithToast>,
        );
        cy.get('#show').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1715] Toast: size=m, view=negative, with Text, enableContentLeft, pilled', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <Interactive
                    text="Toast message"
                    view="negative"
                    size="m"
                    position="top"
                    pilled
                    hasClose={false}
                    enableContentLeft
                />
            </CypressTestDecoratorWithToast>,
        );
        cy.get('#show').click();
        cy.get('div').contains('Toast message');
        cy.matchImageSnapshot();
    });
});
