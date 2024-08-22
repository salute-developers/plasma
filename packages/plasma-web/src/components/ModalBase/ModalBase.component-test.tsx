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
`;

describe('plasma-web: ModalBase', () => {
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
        placement,
    }: {
        open?: boolean;
        withBlur?: boolean;
        placement?: string;
    }) {
        const [isOpen, setIsOpen] = React.useState(open);

        return (
            <PopupBaseProvider>
                <Button text="Open modal" onClick={() => setIsOpen(true)} />
                <ModalBase opened={isOpen} onClose={() => setIsOpen(false)} withBlur={withBlur} placement={placement}>
                    <Content id="modal-content">
                        <Headline3>Modal</Headline3>
                        <Button text="Close" onClick={() => setIsOpen(false)} />
                    </Content>
                </ModalBase>
            </PopupBaseProvider>
        );
    }

    function Double() {
        const [isOpenA, setIsOpenA] = React.useState(false);
        const [isOpenB, setIsOpenB] = React.useState(false);

        return (
            <PopupBaseProvider>
                <Button text="Open modal A" onClick={() => setIsOpenA(true)} />
                <ModalBase opened={isOpenA} onClose={() => setIsOpenA(false)}>
                    <Content id="modalA-content">
                        <Headline3>ModalA</Headline3>
                        <Button text="Close A" onClick={() => setIsOpenA(false)} />
                        <Button text="Open modal B" onClick={() => setIsOpenB(true)} />
                        <ModalBase opened={isOpenB} onClose={() => setIsOpenB(false)} placement="left">
                            <Content id="modalB-content">
                                <Headline3>ModalB</Headline3>
                                <Button text="Close B" onClick={() => setIsOpenB(false)} />
                            </Content>
                        </ModalBase>
                    </Content>
                </ModalBase>
            </PopupBaseProvider>
        );
    }

    function ManualMount() {
        const [isOpen, setIsOpen] = useState(false);
        const [isMounted, setIsMounted] = useState(false);

        return (
            <>
                <PopupBaseProvider>
                    {isMounted && (
                        <ModalBase isOpen={isOpen}>
                            <Headline3>Test modal</Headline3>
                        </ModalBase>
                    )}
                </PopupBaseProvider>
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
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('close', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#modal-content').should('be.visible');
        cy.get('body').type('{esc}');
        cy.get('#plasma-popup-root').should('be.empty');
    });

    it('close overlay', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#modal-content').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('#plasma-popup-root').should('be.empty');
    });

    it('double close', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Double />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Open modal A').click();
        cy.get('button').contains('Open modal B').click();
        cy.get('#modalB-content').should('be.visible');
        cy.get('body').click(5, 5);
        cy.matchImageSnapshot();
        cy.get('#modalA-content').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('#plasma-popup-root').should('be.empty');
    });

    it('withBlur', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo withBlur />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('check focus trap', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Double />
            </CypressTestDecoratorWithTypo>,
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

    it('check document.body overflow-y style', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ManualMount />
            </CypressTestDecoratorWithTypo>,
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
});
