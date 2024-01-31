import React from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { surfaceSolid02 } from '@salutejs/plasma-tokens-web';

const Content = styled.div`
    background: ${surfaceSolid02};
    padding: 1rem;
`;

describe('plasma-web: ModalBase', () => {
    const PopupBaseProvider = getComponent('PopupBaseProvider');
    const ModalBase = getComponent('ModalBase');
    const Button = getComponent('Button');
    const Headline3 = getComponent('Headline3');

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
                <ModalBase isOpen={isOpen} onClose={() => setIsOpen(false)} withBlur={withBlur} placement={placement}>
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
                <ModalBase isOpen={isOpenA} onClose={() => setIsOpenA(false)}>
                    <Content id="modalA-content">
                        <Headline3>ModalA</Headline3>
                        <Button text="Close A" onClick={() => setIsOpenA(false)} />
                        <Button text="Open modal B" onClick={() => setIsOpenB(true)} />
                        <ModalBase isOpen={isOpenB} onClose={() => setIsOpenB(false)} placement="left">
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
        cy.get('#plasma-popup-root').should('be.empty');
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
        cy.get('#plasma-popup-root').should('be.empty');
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
        cy.get('#plasma-popup-root').should('be.empty');
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
});
