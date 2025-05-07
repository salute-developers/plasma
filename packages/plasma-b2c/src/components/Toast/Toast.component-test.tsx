import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconBell } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const Icon = () => <IconBell color="inherit" size="xs" />;
const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Toast', () => {
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

    /**
     * @deprecated
     * Удалить после отключения `dark` и `light` `view` в `Toast`
     */
    it('_view', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <div style={{ position: 'fixed', transform: 'translateX(50%)' }}>
                    <Toast text="Top Message" view="dark" position="top" />
                </div>
                <div style={{ position: 'fixed', transform: 'translate(50%, 3rem)' }}>
                    <Toast text="Bottom Message" view="light" position="bottom" />
                </div>
            </CypressTestDecoratorWithToast>,
        );

        cy.matchImageSnapshot();
    });

    it('_view=positive; _view=negative', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <div style={{ position: 'fixed', transform: 'translateX(50%)' }}>
                    <Toast contentLeft={<Icon />} text="Positive" view="positive" position="top" />
                </div>
                <div style={{ position: 'fixed', transform: 'translate(50%, 3rem)' }}>
                    <Toast contentLeft={<Icon />} text="Negative" view="negative" position="bottom" />
                </div>
            </CypressTestDecoratorWithToast>,
        );

        cy.matchImageSnapshot();
    });

    it('_textColor', () => {
        mount(
            <CypressTestDecoratorWithToast>
                <div style={{ position: 'fixed', transform: 'translateX(50%)' }}>
                    <Toast text="Custom color" textColor="cyan" view="positive" position="top" />
                </div>
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
                    view: 'default',
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

            cy.get('div').contains(text);
            cy.matchImageSnapshot();
        });

        it('_pilled', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={text} pilled />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            cy.get('div').contains(text);
            cy.matchImageSnapshot();
        });

        it('_position', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={text} position="top" />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            cy.get('div').contains(text);
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

            cy.get('div').contains(text);
            cy.matchImageSnapshot();
        });

        it('two lines', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={textLong} />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            cy.get('div').contains(textLong);
            cy.matchImageSnapshot();
        });

        it('two lines: additional content', () => {
            mount(
                <CypressTestDecoratorWithToast>
                    <Interactive text={textLong} enableContentLeft hasClose />
                </CypressTestDecoratorWithToast>,
            );

            cy.get('#show').click();

            cy.get('div').contains(textLong);
            cy.matchImageSnapshot();
        });
    });

    it('clearTimeout on hide', () => {
        const shortText = 'Short Text Message';
        // TODO: https://github.com/salute-developers/plasma/issues/334
        const Button = getComponent('Button');

        const Interactive = () => {
            const { showToast, hideToast } = useToast();
            const onShowToast = () =>
                showToast({
                    text: shortText,
                    view: 'default',
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
        cy.get('div').contains(shortText);

        cy.get('#hide').click();
        cy.get('div').contains(shortText).should('not.exist');

        cy.get('#show').click();
        cy.get('div').contains(shortText);

        cy.matchImageSnapshot();
    });

    it('offset', () => {
        const Button = getComponent('Button');

        const Interactive = () => {
            const { showToast } = useToast();
            const onShowToast = () =>
                showToast({
                    text: 'Toast component test with offset props',
                    view: 'default',
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

    it.only('defaultToastArgs', () => {
        const Button = getComponent('Button');

        const defaultToastArgs = {
            text: 'Toast without args',
            view: 'default',
            size: 'm',
            pilled: true,
            offset: 5,
            hasClose: true,
        };

        const ToastWithoutArgs = () => {
            const { showToast } = useToast();
            const onShowToast = () => showToast();

            return <Button id="show" text="show" onClick={onShowToast} />;
        };

        mount(
            <CypressTestDecorator>
                <StandardTypoStyle />
                <ToastProvider defaultToastArgs={defaultToastArgs}>
                    <ToastWithoutArgs />
                </ToastProvider>
            </CypressTestDecorator>,
        );

        cy.get('#show').click();

        cy.matchImageSnapshot();
    });
});
