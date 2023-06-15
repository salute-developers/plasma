import React, { useState } from 'react';
import styled from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const StyledWrapper = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

describe('plasma-web: useFocusTrap', () => {
    const ModalsProvider = getComponent('ModalsProvider');
    const Modal = getComponent('Modal');
    const Button = getComponent('Button');
    const P1 = getComponent('P1');
    const useFocusTrap = getComponent('useFocusTrap');

    function Demo() {
        const ref = useFocusTrap(true, '#focus-first');
        const [showButtons, setShowButtons] = useState(false);

        return (
            <>
                <Button onClick={() => setShowButtons(true)}>Show buttons</Button>
                {showButtons && (
                    <StyledWrapper ref={ref}>
                        <Button style={{ visibility: 'hidden' }}>Btn</Button>
                        <Button>Button</Button>
                        <Button id="focus-first">First</Button>
                        <Button style={{ display: 'none' }}>Not displayed</Button>
                        <Button onClick={() => setShowButtons(false)}>Close</Button>
                        <Button style={{ opacity: '0' }}>Btn</Button>
                    </StyledWrapper>
                )}
            </>
        );
    }

    function OneNode() {
        const ref = useFocusTrap();
        const [showButtons, setShowButtons] = useState(false);

        return (
            <>
                <Button onClick={() => setShowButtons(true)}>Show</Button>
                {showButtons && <Button ref={ref}>Trapped button</Button>}
            </>
        );
    }

    function Double() {
        const refA = useFocusTrap();
        const refB = useFocusTrap();
        const [showButtonsA, setShowButtonsA] = useState(false);
        const [showButtonsB, setShowButtonsB] = useState(false);

        return (
            <>
                <Button onClick={() => setShowButtonsA(true)}>Show buttons A</Button>
                {showButtonsA && (
                    <StyledWrapper ref={refA}>
                        <Button>Button A</Button>
                        <Button onClick={() => setShowButtonsB(true)}>Show buttons B</Button>
                        {showButtonsB && (
                            <StyledWrapper ref={refB}>
                                <Button>Button B</Button>
                                <Button onClick={() => setShowButtonsB(false)}>Close B</Button>
                            </StyledWrapper>
                        )}
                        <Button onClick={() => setShowButtonsA(false)}>Close A</Button>
                    </StyledWrapper>
                )}
            </>
        );
    }

    it('check first focus', () => {
        mount(
            <CypressTestDecorator>
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Show buttons').type('{enter}');

        cy.focused().should(($p) => {
            expect($p).to.contain('First');
        });
    });

    it('check tab cicle', () => {
        mount(
            <CypressTestDecorator>
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Show buttons').type('{enter}');

        cy.focused().tab();
        cy.focused().tab();
        cy.focused().tab();

        cy.focused().should(($p) => {
            expect($p).to.contain('First');
        });
    });

    it('check one node', () => {
        mount(
            <CypressTestDecorator>
                <ModalsProvider>
                    <OneNode />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Show').type('{enter}');

        cy.focused().should(($p) => {
            expect($p).to.contain('Trapped button');
        });

        cy.focused().tab();

        cy.focused().should(($p) => {
            expect($p).to.contain('Trapped button');
        });
    });

    it('check blur and focus', () => {
        mount(
            <CypressTestDecorator>
                <ModalsProvider>
                    <Double />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Show buttons A').type('{enter}');

        // что выделяется после blur при открытым A
        cy.focused().blur();
        cy.get('body').tab();
        cy.focused().should(($p) => {
            expect($p).to.contain('Button A');
        });

        // проверка первых элементов
        cy.get('button').contains('Show buttons B').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Button B');
        });
        cy.focused().tab();

        // что выделяется после blur при открытом B
        cy.focused().blur();
        cy.get('body').tab();
        cy.focused().should(($p) => {
            expect($p).to.contain('Button B');
        });

        // проверка элемента при закрытии
        cy.get('button').contains('Close B').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Show buttons B');
        });

        // что выделяется после blur при закрытом B/открытом A
        cy.focused().blur();
        cy.get('body').tab();
        cy.focused().should(($p) => {
            expect($p).to.contain('Button A');
        });
    });
});
