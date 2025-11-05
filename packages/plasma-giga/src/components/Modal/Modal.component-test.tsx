import React, { useState } from 'react';
import styled from 'styled-components';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

const Content = styled.div`
    background: #f0f0f0;
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;
`;

describe('plasma-giga: Modal', () => {
    const PopupProvider = getComponent('PopupProvider');
    const Modal = getComponent('Modal');
    const Button = getComponent('Button');
    const H3 = getComponent('H3');

    function Demo({
        open = false,
        withBlur = false,
        isFocusTrapped = true,
        placement,
    }: {
        open?: boolean;
        withBlur?: boolean;
        placement?: string;
        isFocusTrapped?: boolean;
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
                >
                    <Content id="modal-content">
                        <H3>Modal</H3>
                        <Button text="Close" onClick={() => setIsOpen(false)} />
                    </Content>
                </Modal>
            </PopupProvider>
        );
    }

    function DemoWithBody({
        open = false,
        withBlur = false,
        placement,
        hasClose,
    }: {
        open?: boolean;
        withBlur?: boolean;
        placement?: string;
        hasClose?: boolean;
    }) {
        const [isOpen, setIsOpen] = React.useState(open);

        return (
            <PopupProvider>
                <Button text="Open modal" onClick={() => setIsOpen(true)} data-test="open-modal" />
                <Modal
                    opened={isOpen}
                    onClose={() => setIsOpen(false)}
                    withBlur={withBlur}
                    placement={placement}
                    hasBody
                    hasClose={hasClose}
                >
                    <H3>Modal</H3>
                    <Button text="Close" onClick={() => setIsOpen(false)} />
                </Modal>
            </PopupProvider>
        );
    }

    function Double() {
        const [isOpenA, setIsOpenA] = React.useState(false);
        const [isOpenB, setIsOpenB] = React.useState(false);

        return (
            <PopupProvider>
                <Button text="Open modal A" onClick={() => setIsOpenA(true)} />
                <Modal opened={isOpenA} onClose={() => setIsOpenA(false)}>
                    <Content id="modalA-content">
                        <H3>ModalA</H3>
                        <Button text="Close A" onClick={() => setIsOpenA(false)} />
                        <Button text="Open modal B" onClick={() => setIsOpenB(true)} />
                        <Modal opened={isOpenB} onClose={() => setIsOpenB(false)} placement="left">
                            <Content id="modalB-content">
                                <H3>ModalB</H3>
                                <Button text="Close B" onClick={() => setIsOpenB(false)} />
                            </Content>
                        </Modal>
                    </Content>
                </Modal>
            </PopupProvider>
        );
    }

    function ManualMount() {
        const [isOpen, setIsOpen] = useState(false);
        const [isMounted, setIsMounted] = useState(false);

        return (
            <>
                <PopupProvider>
                    {isMounted && (
                        <Modal isOpen={isOpen}>
                            <H3>Test modal</H3>
                        </Modal>
                    )}
                </PopupProvider>
                <Button text="Toggle Modal open" onClick={() => setIsOpen(!isOpen)} />
                <Button text="Toggle Modal mount" onClick={() => setIsMounted(!isMounted)} />
            </>
        );
    }

    afterEach(() => {
        // некоторые тесты оставляют открытые модалки и не сбрасывают overflowY у body
        document.body.style.overflowY = 'unset';
    });

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('close', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#modal-content').should('be.visible');
        cy.get('body').type('{esc}');
        cy.get('.popup-base-root').should('not.exist');
    });

    it('close overlay', () => {
        mount(
            <CypressTestDecorator>
                <Demo />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#modal-content').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('.popup-base-root').should('not.exist');
    });

    it('double close', () => {
        mount(
            <CypressTestDecorator>
                <Double />
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open modal A').click();
        cy.get('button').contains('Open modal B').click();
        cy.get('#modalB-content').should('be.visible');
        cy.get('body').click(5, 5);
        cy.matchImageSnapshot();
        cy.get('#modalA-content').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('.popup-base-root').should('not.exist');
    });

    it('withBlur', () => {
        mount(
            <CypressTestDecorator>
                <Demo withBlur />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('hasBody', () => {
        mount(
            <CypressTestDecorator>
                <DemoWithBody hasClose={false} />
            </CypressTestDecorator>,
        );

        cy.get('[data-test="open-modal"]').click();

        cy.matchImageSnapshot();

        cy.get('[data-test="modal-close"]').should('not.exist');
    });

    it('hasBody: hasClose', () => {
        mount(
            <CypressTestDecorator>
                <DemoWithBody />
            </CypressTestDecorator>,
        );

        cy.get('[data-test="open-modal"]').click();

        cy.matchImageSnapshot();

        cy.get('[data-test="modal-close"]').click();
        cy.get('[data-test="modal-close"]').should('not.exist');
    });

    it('check focus trap', () => {
        mount(
            <CypressTestDecorator>
                <Double />
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open modal A').type('{enter}');
        cy.get('button').contains('Open modal B').type('{enter}');
        cy.get('button').contains('Close B').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal B');
        });

        cy.focused().tab();
        cy.focused().tab();

        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal B');
        });
        cy.get('button').contains('Close A').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal A');
        });
    });

    it('check disabled focus trap', () => {
        mount(
            <CypressTestDecorator>
                <Demo isFocusTrapped={false} />
                <Button>Outer</Button>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open modal').type('{enter}');

        cy.focused().tab();

        cy.focused().should(($p) => {
            expect($p).to.contain('Close');
        });

        cy.focused().tab({ shift: true });

        cy.focused().should(($p) => {
            expect($p).to.contain('Outer');
        });
    });

    it('check document.body overflow-y style', () => {
        mount(
            <CypressTestDecorator>
                <ManualMount />
            </CypressTestDecorator>,
        );

        cy.get('body').should('not.have.css', 'overflow-y', 'hidden');
        cy.get('button').contains('Toggle Modal mount').click();
        cy.get('button').contains('Toggle Modal open').click();

        cy.contains('Test modal').should('be.visible');
        cy.get('body').should('have.css', 'overflow-y', 'hidden');

        // размонтируем без выставления isOpen = false
        cy.get('button').contains('Toggle Modal mount').click({ force: true });
        cy.get('Test modal').should('not.exist');
        cy.get('body').should('not.have.css', 'overflow-y', 'hidden');
    });

    it('draggable', () => {
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

    it('resizable', () => {
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
});
