import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    #plasma-modals-root * {
        animation: none !important;
    }
`;

const text = `Если после применения правила Лопиталя неопределённость типа 0 / 0 осталась, мнимая единица традиционно
развивает Наибольший Общий Делитель (НОД).`;
const heading = 'Голосовая викторина Валдисом Пельшем';

describe('plasma-web: Modal', () => {
    const ModalsProvider = getComponent('ModalsProvider');
    const Modal = getComponent('Modal');
    const Button = getComponent('Button');
    const P1 = getComponent('P1');
    const Headline3 = getComponent('Headline1');

    function Demo({ open = false, withBlur = false }: { open?: boolean; withBlur?: boolean }) {
        const [isOpen, setIsOpen] = React.useState(open);

        return (
            <>
                <Button text="Открыть модальное окно" onClick={() => setIsOpen(true)} />
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} withBlur={withBlur}>
                    <Headline3>{heading}</Headline3>
                    <P1>{text}</P1>
                    <Button text="Закрыть" onClick={() => setIsOpen(false)} />
                </Modal>
            </>
        );
    }

    function Double() {
        const [isOpenA, setIsOpenA] = React.useState(false);
        const [isOpenB, setIsOpenB] = React.useState(false);

        return (
            <>
                <Button text="Open modal A" onClick={() => setIsOpenA(true)} />
                <Modal id="modalA" isOpen={isOpenA} onClose={() => setIsOpenA(false)}>
                    <Headline3>Modal A</Headline3>
                    <P1>{text}</P1>
                    <Button text="Open modal B" onClick={() => setIsOpenB(true)} />
                    <Button text="Close-A" onClick={() => setIsOpenA(false)} />
                </Modal>
                <Modal id="modalB" isOpen={isOpenB} onClose={() => setIsOpenB(false)}>
                    <Headline3>Modal B</Headline3>
                    <P1>{text}</P1>
                    <Button text="Close-B" onClick={() => setIsOpenB(false)} />
                </Modal>
            </>
        );
    }

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('open', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo open />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('close', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('body').type('{esc}');
        cy.get('#plasma-modals-root').should('be.empty');
    });

    it('close overlay', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('#plasma-modals-root').should('be.empty');
    });

    it('close X', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('svg').click();
        cy.get('#plasma-modals-root').should('be.empty');
    });

    it('double close', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Double />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open modal A').click();
        cy.get('button').contains('Open modal B').click();
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('div').contains('Modal A').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('#plasma-modals-root').should('be.empty');
    });

    it('withBlur', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo withBlur />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('check focus trap', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Double />
                </ModalsProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').contains('Open modal A').type('{enter}');
        cy.get('button').contains('Open modal B').type('{enter}');
        cy.get('button').contains('Close-B').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal B');
        });

        cy.focused().tab();
        cy.focused().tab();
        // по какой-то причине таб не срабатывает с первого раза
        cy.focused().tab().tab();

        cy.focused().should(($p) => {
            expect($p).to.contain('Close-A');
        });
        cy.get('button').contains('Close-A').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal A');
        });
    });
});
