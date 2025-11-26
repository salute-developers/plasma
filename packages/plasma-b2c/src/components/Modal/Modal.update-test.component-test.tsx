import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

const text = `Если после применения правила Лопиталя неопределённость типа 0 / 0 осталась, мнимая единица традиционно
развивает Наибольший Общий Делитель (НОД).`;
const heading = 'Голосовая викторина с Валдисом Пельшем';

describe('plasma-b2c: Modal', () => {
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

    function Demo({
        open = false,
        withBlur = false,
        showCloseButton = false,
        closeOnEsc = true,
        closeOnOverlayClick = false,
    }: {
        open?: boolean;
        withBlur?: boolean;
        showCloseButton?: boolean;
        closeOnEsc?: boolean;
        closeOnOverlayClick?: boolean;
    }) {
        const [isOpen, setIsOpen] = React.useState(open);

        return (
            <>
                <Button text="Open modal" onClick={() => setIsOpen(true)} />
                <Modal
                    opened={isOpen}
                    onClose={() => setIsOpen(false)}
                    withBlur={withBlur}
                    showCloseButton={showCloseButton}
                    closeOnEsc={closeOnEsc}
                    closeOnOverlayClick={closeOnOverlayClick}
                >
                    <Headline3>{heading}</Headline3>
                    <P1>{text}</P1>
                    <Button text="Закрыть" onClick={() => setIsOpen(false)} />
                </Modal>
            </>
        );
    }

    it('[PLASMA-T1645] Modal: withBlur, closeOnEsc', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo withBlur />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#plasma-modals-root > div').should('be.visible');

        cy.matchImageSnapshot();

        cy.get('body').click(5, 5);
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('body').type('{esc}');
        cy.get('#plasma-modals-root').should('be.empty');
    });

    it('[PLASMA-T1646] Modal: closeOnOverlayClick, showCloseButton', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />
                <ModalsProvider>
                    <Demo showCloseButton closeOnOverlayClick closeOnEsc={false} />
                </ModalsProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();
        cy.get('#plasma-modals-root > div').should('be.visible');

        cy.matchImageSnapshot();

        cy.get('body').type('{esc}');
        cy.get('#plasma-modals-root > div').should('be.visible');
        cy.get('body').click(5, 5);
        cy.get('#plasma-modals-root').should('be.empty');
    });
});
