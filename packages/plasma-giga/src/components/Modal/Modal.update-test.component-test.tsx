import React from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const Content = styled.div`
    background: #f0f0f0;
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;
`;

const BodyPad = styled.div`
    box-sizing: border-box;
    padding: 2rem;
`;

const WIDE_VIEWPORT = { width: 800, height: 500 } as const;

function getEdgeOffset(placement?: string): [number, number] {
    if (placement === 'left' || placement === 'right') {
        return [1, 0];
    }

    if (placement === 'top' || placement === 'bottom') {
        return [0, 1];
    }

    return [0, 0];
}

describe('plasma-giga: Modal', () => {
    const PopupProvider = getComponent('PopupProvider');
    const Modal = getComponent('Modal');
    const ModalHeader = getComponent('ModalHeader');
    const ModalFooter = getComponent('ModalFooter');
    const ModalImage = getComponent('ModalImage');
    const Button = getComponent('Button');
    const H2 = getComponent('H2');
    const H3 = getComponent('H3');

    function Demo({
        open = false,
        withBlur = false,
        isFocusTrapped = true,
        placement,
        hasClose = false,
        closeOnEsc = true,
        closeOnOverlayClick = false,
    }: {
        open?: boolean;
        withBlur?: boolean;
        placement?: string;
        isFocusTrapped?: boolean;
        hasClose?: boolean;
        closeOnEsc?: boolean;
        closeOnOverlayClick?: boolean;
    }) {
        const [isOpen, setIsOpen] = React.useState(open);

        return (
            <PopupProvider>
                <Button text="Open modal" onClick={() => setIsOpen(true)} />
                <Modal
                    opened={isOpen}
                    isFocusTrapped={isFocusTrapped}
                    onClose={() => setIsOpen(false)}
                    withBlur={withBlur}
                    placement={placement}
                    offset={getEdgeOffset(placement)}
                    hasBody
                    hasClose={hasClose}
                    size="s"
                    closeOnEsc={closeOnEsc}
                    closeOnOverlayClick={closeOnOverlayClick}
                >
                    <BodyPad>
                        <H3>Modal</H3>
                        <Button id="button-close" text="Close" onClick={() => setIsOpen(false)} />
                    </BodyPad>
                </Modal>
            </PopupProvider>
        );
    }

    it('[PLASMA-T1647] ModalBase: placement=top, withBlur, closeOnEsc', () => {
        mount(
            <CypressTestDecorator>
                <Demo placement="top" withBlur />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#button-close').should('be.visible');

        cy.matchImageSnapshot();

        cy.get('body').click(5, 5);
        cy.get('.popup-base-root').should('exist');
        cy.get('body').type('{esc}');
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T1648] ModalBase: placement=bottom, closeOnOverlayClick, hasClose', () => {
        mount(
            <CypressTestDecorator>
                <Demo placement="bottom" hasClose closeOnOverlayClick closeOnEsc={false} />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#button-close').should('be.visible');

        cy.matchImageSnapshot();

        cy.get('body').type('{esc}');
        cy.get('.popup-base-root').should('exist');
        cy.get('body').click(5, 5);
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T1649] ModalBase: placement=right', () => {
        cy.viewport(WIDE_VIEWPORT.width, WIDE_VIEWPORT.height);

        mount(
            <CypressTestDecorator>
                <Demo placement="right" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#button-close').should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1650] ModalBase: placement=left', () => {
        cy.viewport(WIDE_VIEWPORT.width, WIDE_VIEWPORT.height);

        mount(
            <CypressTestDecorator>
                <Demo placement="left" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#button-close').should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2312] ModalBase: draggable', () => {
        function Draggable() {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <>
                    <Button id="open-button" text="Открыть" onClick={() => setIsOpen(true)} />

                    <Modal opened={isOpen} placement="center" draggable>
                        <Content id="content">
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </Content>
                    </Modal>
                </>
            );
        }

        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Draggable />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.get('#content').trigger('mousedown').trigger('mousemove', { clientX: 200, clientY: 100 }).trigger('mouseup');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2313] ModalBase: resizable', () => {
        function Resizable() {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
                <>
                    <Button id="open-button" text="Открыть" onClick={() => setIsOpen(true)} />

                    <Modal opened={isOpen} placement="center" resizable>
                        <Content id="popup-content">
                            Content
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </Content>
                    </Modal>
                </>
            );
        }

        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Resizable />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.get('.resizable-bottom-right-icon')
            .trigger('mousedown')
            .trigger('mousemove', { clientX: 400, clientY: 400 })
            .trigger('mouseup');

        cy.matchImageSnapshot();
    });

    it('ModalBase: hasBody, slots, size=m', () => {
        cy.viewport(WIDE_VIEWPORT.width, WIDE_VIEWPORT.height);

        function DemoWithSlots() {
            const [isOpen, setIsOpen] = React.useState(true);

            return (
                <PopupProvider>
                    <Modal opened={isOpen} onClose={() => setIsOpen(false)} hasBody hasClose size="m">
                        <ModalHeader>
                            <H2>Заголовок</H2>
                        </ModalHeader>
                        <ModalImage>
                            <div style={{ height: '12.5rem', background: '#d0d0d0' }} />
                        </ModalImage>
                        <div style={{ minHeight: '4.875rem' }} />
                        <ModalFooter>
                            <Button text="Label" />
                            <Button view="secondary" text="Label" />
                        </ModalFooter>
                    </Modal>
                </PopupProvider>
            );
        }

        mount(
            <CypressTestDecorator>
                <DemoWithSlots />
            </CypressTestDecorator>,
        );

        cy.contains('Заголовок').should('be.visible');
        cy.get('[data-test="modal-close"]').should('be.visible');

        cy.matchImageSnapshot();
    });

    it('ModalBase: hasBody, slots, size=s', () => {
        function DemoWithSlots() {
            const [isOpen, setIsOpen] = React.useState(true);

            return (
                <PopupProvider>
                    <Modal opened={isOpen} onClose={() => setIsOpen(false)} hasBody hasClose size="s">
                        <ModalHeader>
                            <H3>Заголовок</H3>
                        </ModalHeader>
                        <ModalImage>
                            <div style={{ height: '12.5rem', background: '#d0d0d0' }} />
                        </ModalImage>
                        <div style={{ minHeight: '4.875rem' }} />
                        <ModalFooter>
                            <Button size="s" text="Label" />
                            <Button size="s" view="secondary" text="Label" />
                        </ModalFooter>
                    </Modal>
                </PopupProvider>
            );
        }

        mount(
            <CypressTestDecorator>
                <DemoWithSlots />
            </CypressTestDecorator>,
        );

        cy.contains('Заголовок').should('be.visible');
        cy.matchImageSnapshot();
    });

    it('ModalBase: hasBody, absoluteHeader, ModalImage', () => {
        function DemoAbsolute() {
            const [isOpen, setIsOpen] = React.useState(true);

            return (
                <PopupProvider>
                    <Modal opened={isOpen} onClose={() => setIsOpen(false)} hasBody hasClose size="s">
                        <ModalImage>
                            <div style={{ height: '12.5rem', background: '#d0d0d0' }} />
                        </ModalImage>
                        <ModalHeader absolute>
                            <H3>Заголовок</H3>
                        </ModalHeader>
                        <ModalFooter>
                            <Button size="s" text="Label" />
                            <Button size="s" view="secondary" text="Label" />
                        </ModalFooter>
                    </Modal>
                </PopupProvider>
            );
        }

        mount(
            <CypressTestDecorator>
                <DemoAbsolute />
            </CypressTestDecorator>,
        );

        cy.contains('Заголовок').should('be.visible');
        cy.matchImageSnapshot();
    });

    it('ModalBase: hasBody, resizable', () => {
        function Resizable() {
            const [isOpen, setIsOpen] = React.useState(true);

            return (
                <PopupProvider>
                    <Modal
                        opened={isOpen}
                        placement="center"
                        hasBody
                        hasClose
                        size="s"
                        resizable={{
                            defaultSize: { width: 320, height: 200 },
                            directions: ['bottom-right'],
                        }}
                    >
                        <BodyPad>
                            Content
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </BodyPad>
                    </Modal>
                </PopupProvider>
            );
        }

        mount(
            <CypressTestDecorator>
                <Resizable />
            </CypressTestDecorator>,
        );

        cy.get('.resizable-bottom-right-icon').should('be.visible');
        cy.matchImageSnapshot();
    });
});
