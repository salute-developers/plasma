import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    #plasma-modals-root * {
        animation: none !important;
    }
`;

const text = `Если после применения правила Лопиталя неопределённость типа 0 / 0 осталась, мнимая единица традиционно
развивает Наибольший Общий Делитель (НОД).`;
const heading = 'Голосовая викторина с Валдисом Пельшем';

describe('plasma-web: Modal', () => {
    const ModalsProvider = getComponent('ModalsProvider');
    const Modal = getComponent('Modal');
    const Button = getComponent('Button');
    const P1 = getComponent('P1');
    const Headline3 = getComponent('Headline1');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    function Demo({ open = false, withBlur = false }: { open?: boolean; withBlur?: boolean }) {
        const [isOpen, setIsOpen] = React.useState(open);

        return (
            <>
                <Button text="Открыть модальное окно" onClick={() => setIsOpen(true)} />
                <Modal opened={isOpen} onClose={() => setIsOpen(false)} withBlur={withBlur}>
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
                <Modal id="modalA" opened={isOpenA} onClose={() => setIsOpenA(false)}>
                    <Headline3>Modal A</Headline3>
                    <P1>{text}</P1>
                    <Button text="Open modal B" onClick={() => setIsOpenB(true)} />
                    <Button text="Close-A" onClick={() => setIsOpenA(false)} />
                </Modal>
                <Modal id="modalB" opened={isOpenB} onClose={() => setIsOpenB(false)}>
                    <Headline3>Modal B</Headline3>
                    <P1>{text}</P1>
                    <Button text="Close-B" onClick={() => setIsOpenB(false)} />
                </Modal>
            </>
        );
    }

    function Custom(props: { closeOnEsc?: boolean; closeOnOverlayClick?: boolean; showCloseButton?: boolean }) {
        const [isOpenA, setIsOpenA] = React.useState(false);
        const [isOpenB, setIsOpenB] = React.useState(false);

        const otherButton = React.useRef<HTMLButtonElement | null>(null);
        const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);

        return (
            <>
                <Button text="Open modal A" onClick={() => setIsOpenA(true)} />
                <Button
                    style={{ margin: '0 10px' }}
                    text="Open modal B"
                    onClick={() => setIsOpenB(true)}
                    ref={otherButton}
                />
                <Modal
                    id="modalA"
                    opened={isOpenA}
                    onClose={() => setIsOpenA(false)}
                    initialFocusRef={closeBtnRef}
                    focusAfterRef={otherButton}
                    {...props}
                >
                    <Headline3>Modal A</Headline3>
                    <P1>{text}</P1>
                    <Button text="First button" onClick={() => setIsOpenA(false)} />
                    <Button
                        style={{ margin: '0 10px' }}
                        ref={closeBtnRef}
                        text="Close-A"
                        onClick={() => setIsOpenA(false)}
                    />
                </Modal>
                <Modal id="modalB" opened={isOpenB} onClose={() => setIsOpenB(false)} {...props}>
                    <Headline3>Modal B</Headline3>
                    <P1>{text}</P1>
                    <Button text="Close-B" onClick={() => setIsOpenB(false)} />
                </Modal>
            </>
        );
    }

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('open', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo open />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('close', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('body').type('{esc}');
        cy.get('#plasma-modals-root').should('be.empty');
    });

    it('close overlay', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('#plasma-modals-root').should('be.empty');
    });

    it('close X', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('svg').click();
        cy.get('#plasma-modals-root').should('be.empty');
    });

    it('double close', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Double />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
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
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo withBlur />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('check focus trap', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Double />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Open modal A').type('{enter}');
        cy.get('button').contains('Open modal B').type('{enter}');
        cy.get('button').contains('Close-B').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal B');
        });

        cy.focused().tab();
        cy.focused().tab();
        cy.focused().tab();

        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal B');
        });
        cy.get('button').contains('Close-A').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal A');
        });
    });

    it('focus initial - later', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Custom />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Open modal A').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Close-A');
        });
        cy.get('button').contains('Close-A').type('{enter}');
        cy.focused().should(($p) => {
            expect($p).to.contain('Open modal B');
        });
    });

    it('forbidden close', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Custom closeOnEsc={false} closeOnOverlayClick={false} />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Open modal A').type('{enter}');
        cy.get('#plasma-modals-root > div').should('be.visible');

        // overlay
        cy.get('body').click(5, 5);
        cy.get('#plasma-modals-root').should('not.be.empty');

        // esc
        cy.get('body').type('{esc}');
        cy.get('#plasma-modals-root').should('not.be.empty');
    });

    it('without close icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Custom showCloseButton={false} />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').contains('Open modal A').type('{enter}');
        cy.matchImageSnapshot();
    });
});
