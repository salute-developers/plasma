import React, { useState } from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const Content = styled.div`
    background: #f0f0f0;
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;
`;

describe('sdds-insol: Modal', () => {
    const PopupProvider = getComponent('PopupProvider');
    const Modal = getComponent('Modal');
    const Button = getComponent('Button');
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
                    hasBody
                    hasClose={hasClose}
                    closeOnEsc={closeOnEsc}
                    closeOnOverlayClick={closeOnOverlayClick}
                >
                    <H3>Modal</H3>
                    <Button id="button-close" text="Close" onClick={() => setIsOpen(false)} />
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
});
