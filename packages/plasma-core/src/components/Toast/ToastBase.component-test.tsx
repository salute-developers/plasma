import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconBell } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const Icon = () => <IconBell color="inherit" size="xs" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-core: Toast', () => {
    const Toast = getComponent('Toast');
    const useToast = getComponent('useToast');
    const ToastProvider = getComponent('ToastProvider');

    const Container: FC<PropsWithChildren> = ({ children }) => (
        <div style={{ position: 'fixed', transform: 'translateX(50%)' }}>{children}</div>
    );
    const CypressTestDecoratorWithToast: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            <ToastProvider>{children}</ToastProvider>
        </CypressTestDecorator>
    );

    it('default', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <Container>
                    <Toast text="Short Text Message Without Action" />
                </Container>
            </CypressTestDecoratorWithToast>,
        );

        cy.matchImageSnapshot();
    });

    it('with close', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <Container>
                    <Toast text="Short Text Message Without Action" hasClose />
                </Container>
            </CypressTestDecoratorWithToast>,
        );

        cy.matchImageSnapshot();
    });

    it('with content-left', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <Container>
                    <Toast text="Short Text Message Without Action" contentLeft={<Icon />} />
                </Container>
            </CypressTestDecoratorWithToast>,
        );

        cy.matchImageSnapshot();
    });

    describe('useToast', () => {
        const text = 'Short Text Message Without Action';
        const textLong =
            'Long Text Message Without Action Long Text Message Without Action Long Text Message Without Action';
        const Button = getComponent('Button');

        const Interactive = ({ text: _text, position, timeout, pilled, hasClose, enableContentLeft }) => {
            const { showToast } = useToast();
            const ContentLeft = enableContentLeft && <Icon />;
            const onShowToast = () =>
                showToast({
                    text: _text,
                    view: 'primary',
                    size: 'm',
                    pilled,
                    position,
                    timeout,
                    hasClose,
                    contentLeft: ContentLeft,
                });

            return <Button id="show" text="show" onClick={onShowToast} />;
        };

        it('showToast', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={text} />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.matchImageSnapshot();
        });

        it('_pilled', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={text} pilled />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.matchImageSnapshot();
        });

        it('_position', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={text} position="top" />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.matchImageSnapshot();
        });

        it('dumm', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            cy.matchImageSnapshot();
        });

        it('timeout', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={text} timeout={0} />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(600);
            cy.matchImageSnapshot();
        });

        it('two lines', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={textLong} />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.matchImageSnapshot();
        });

        it('two lines: additional content', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={textLong} enableContentLeft hasClose />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.matchImageSnapshot();
        });
    });

    it('clearTimeout on hide', () => {
        // TODO: https://github.com/salute-developers/plasma/issues/334
        const Button = getComponent('Button');

        const Interactive = () => {
            const { showToast, hideToast } = useToast();
            const onShowToast = () =>
                showToast({
                    text: 'Short Text Message',
                    view: 'primary',
                    size: 'm',
                    position: 'top',
                    timeout: 600,
                });

            return (
                <>
                    <Button id="show" text="show" onClick={onShowToast} />
                    <Button id="hide" text="hide" onClick={hideToast} />
                </>
            );
        };

        mount(
            <CypressTestDecoratorWithToast>
                <Interactive />
            </CypressTestDecoratorWithToast>,
        );

        cy.get('#show').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('#hide').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('#show').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);

        // Toast must be visible at this moment
        cy.matchImageSnapshot();
    });

    it('offset', () => {
        const Button = getComponent('Button');

        const Interactive = () => {
            const { showToast } = useToast();
            const onShowToast = () =>
                showToast({
                    text: 'Toast component test with offset props',
                    view: 'primary',
                    size: 'm',
                    offset: 10,
                });

            return <Button id="show" text="show" onClick={onShowToast} />;
        };

        mount(
            <CypressTestDecoratorWithToast>
                <Interactive />
            </CypressTestDecoratorWithToast>,
        );

        cy.get('#show').click();

        cy.matchImageSnapshot();
    });
});
