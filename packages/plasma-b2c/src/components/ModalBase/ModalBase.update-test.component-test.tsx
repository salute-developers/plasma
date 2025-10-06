import React, { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { surfaceSolid02 } from '@salutejs/plasma-tokens-web';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const Content = styled.div`
    background: ${surfaceSolid02};
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;
`;

describe('plasma-b2c: ModalBase', () => {
    const PopupBaseProvider = getComponent('PopupBaseProvider');
    const ModalBase = getComponent('ModalBase');
    const Button = getComponent('Button');
    const Headline3 = getComponent('Headline3');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

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
            <PopupBaseProvider>
                <Button text="Open modal" onClick={() => setIsOpen(true)} />
                <ModalBase
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
                    <Headline3>Modal</Headline3>
                    <Button id="button-close" text="Close" onClick={() => setIsOpen(false)} />
                </ModalBase>
            </PopupBaseProvider>
        );
    }

    it('[PLASMA-T1647] ModalBase: placement=top, withBlur, closeOnEsc', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo placement="top" withBlur />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Demo placement="bottom" hasClose closeOnOverlayClick closeOnEsc={false} />
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <Demo placement="right" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#button-close').should('be.visible');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1650] ModalBase: placement=left', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo placement="left" />
            </CypressTestDecoratorWithTypo>,
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

                    <ModalBase opened={isOpen} placement="center" draggable>
                        <Content id="content">
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </Content>
                    </ModalBase>
                </>
            );
        }

        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Draggable />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
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

                    <ModalBase opened={isOpen} placement="center" resizable>
                        <Content id="popup-content">
                            Content
                            <Button text="Close" onClick={() => setIsOpen(false)} />
                        </Content>
                    </ModalBase>
                </>
            );
        }

        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Resizable />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.get('.resizable-bottom-right-icon')
            .trigger('mousedown')
            .trigger('mousemove', { clientX: 400, clientY: 400 })
            .trigger('mouseup');

        cy.matchImageSnapshot();
    });
});
