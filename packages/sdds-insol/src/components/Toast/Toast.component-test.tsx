import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconBell } from '@salutejs/plasma-icons';

const Icon = () => <IconBell color="inherit" size="xs" />;

describe('sdds-insol: Toast', () => {
    const Toast = getComponent('Toast');
    const useToast = getComponent('useToast');
    const ToastProvider = getComponent('ToastProvider');

    const Container: FC<PropsWithChildren> = ({ children }) => (
        <div style={{ position: 'fixed', transform: 'translateX(50%)' }}>{children}</div>
    );

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <Container>
                    <Toast text="Short Text Message Without Action" />
                </Container>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    /**
     * @deprecated
     * Удалить после отключения `dark` и `light` `view` в `Toast`
     */
    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ position: 'fixed', transform: 'translateX(50%)' }}>
                    <Toast text="Top Message" view="dark" position="top" />
                </div>
                <div style={{ position: 'fixed', transform: 'translate(50%, 3rem)' }}>
                    <Toast text="Bottom Message" view="light" position="bottom" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view=positive; _view=negative', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ position: 'fixed', transform: 'translateX(50%)' }}>
                    <Toast contentLeft={<Icon />} text="Positive" view="positive" position="top" />
                </div>
                <div style={{ position: 'fixed', transform: 'translate(50%, 3rem)' }}>
                    <Toast contentLeft={<Icon />} text="Negative" view="negative" position="bottom" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_textColor', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ position: 'fixed', transform: 'translateX(50%)' }}>
                    <Toast text="Custom color" textColor="cyan" view="positive" position="top" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with close', () => {
        mount(
            <CypressTestDecorator>
                <Container>
                    <Toast text="Short Text Message Without Action" hasClose />
                </Container>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('with content-left', () => {
        mount(
            <CypressTestDecorator>
                <Container>
                    <Toast text="Short Text Message Without Action" contentLeft={<Icon />} />
                </Container>
            </CypressTestDecorator>,
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
                <CypressTestDecorator>
                    <ToastProvider>
                        <Interactive text={text} />
                    </ToastProvider>
                </CypressTestDecorator>,
            );

            cy.get('#show').click();

            cy.get('div').contains(text);
            cy.matchImageSnapshot();
        });

        it('_pilled', () => {
            mount(
                <CypressTestDecorator>
                    <ToastProvider>
                        <Interactive text={text} pilled />
                    </ToastProvider>
                </CypressTestDecorator>,
            );

            cy.get('#show').click();

            cy.get('div').contains(text);
            cy.matchImageSnapshot();
        });

        it('_position', () => {
            mount(
                <CypressTestDecorator>
                    <ToastProvider>
                        <Interactive text={text} position="top" />
                    </ToastProvider>
                </CypressTestDecorator>,
            );

            cy.get('#show').click();

            cy.get('div').contains(text);
            cy.matchImageSnapshot();
        });

        it('dumm', () => {
            mount(
                <CypressTestDecorator>
                    <ToastProvider>
                        <Interactive />
                    </ToastProvider>
                </CypressTestDecorator>,
            );

            cy.get('#show').click();

            cy.matchImageSnapshot();
        });

        it('timeout', () => {
            mount(
                <CypressTestDecorator>
                    <ToastProvider>
                        <Interactive text={text} timeout={0} />
                    </ToastProvider>
                </CypressTestDecorator>,
            );

            cy.get('#show').click();

            cy.get('div').contains(text);
            cy.matchImageSnapshot();
        });

        it('two lines', () => {
            mount(
                <CypressTestDecorator>
                    <ToastProvider>
                        <Interactive text={textLong} />
                    </ToastProvider>
                </CypressTestDecorator>,
            );

            cy.get('#show').click();

            cy.get('div').contains(textLong);
            cy.matchImageSnapshot();
        });

        it('two lines: additional content', () => {
            mount(
                <CypressTestDecorator>
                    <ToastProvider>
                        <Interactive text={textLong} enableContentLeft hasClose />
                    </ToastProvider>
                </CypressTestDecorator>,
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
            <CypressTestDecorator>
                <ToastProvider>
                    <Interactive />
                </ToastProvider>
            </CypressTestDecorator>,
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
            <CypressTestDecorator>
                <ToastProvider>
                    <Interactive />
                </ToastProvider>
            </CypressTestDecorator>,
        );

        cy.get('#show').click();

        cy.matchImageSnapshot();
    });

    it('defaultToastArgs', () => {
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
                <ToastProvider defaultToastArgs={defaultToastArgs}>
                    <ToastWithoutArgs />
                </ToastProvider>
            </CypressTestDecorator>,
        );

        cy.get('#show').click();

        cy.matchImageSnapshot();
    });
});
