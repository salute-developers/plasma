import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconDone } from '@salutejs/plasma-icons';

type DrawerDemoProps = {
    width?: string;
    height?: string;
    placement?: string;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    showActions?: boolean;
    closePlacement?: string;
    hasClose?: boolean;
    asModal?: boolean;
};

const StandardTypoStyle = createGlobalStyle(standardTypo);
const Icon = () => <IconDone color="inherit" size="s" />;

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

describe('plasma-b2c: Drawer', () => {
    const PopupBaseProvider = getComponent('PopupBaseProvider');
    const Drawer = getComponent('Drawer');
    const DrawerHeader = getComponent('DrawerHeader');
    const DrawerContent = getComponent('DrawerContent');
    const DrawerFooter = getComponent('DrawerFooter');
    const Button = getComponent('Button');
    const Headline3 = getComponent('Headline3');
    const Headline4 = getComponent('Headline4');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    function Demo(props: DrawerDemoProps) {
        const [isOpen, setIsOpen] = React.useState(false);
        const {
            width = '50vw',
            height = '100vh',
            placement = 'right',
            closePlacement = 'right',
            hasClose = true,
            showHeader = true,
            showFooter = true,
            showActions = true,
            asModal = true,
            closeOnEsc = false,
            closeOnOverlayClick = false,
        } = props;

        return (
            <>
                <Button text="Open drawer" onClick={() => setIsOpen(true)} />
                <Drawer
                    className="plasma-drawer"
                    opened={isOpen}
                    onClose={() => setIsOpen(false)}
                    placement={placement}
                    asModal={asModal}
                    closeOnEsc={closeOnEsc}
                    closeOnOverlayClick={closeOnOverlayClick}
                    width={width}
                    height={height}
                >
                    <DrawerHeader
                        closePlacement={closePlacement}
                        hasClose={hasClose}
                        onClose={() => setIsOpen(false)}
                        actions={
                            showActions && (
                                <Button square size="s" view="clear" style={{ width: '1.5rem', height: '1.5rem' }}>
                                    <Icon size="s" />
                                </Button>
                            )
                        }
                    >
                        {showHeader && <Headline3>Header</Headline3>}
                    </DrawerHeader>
                    <DrawerContent>
                        <Headline4>Content</Headline4>
                    </DrawerContent>
                    {showFooter && (
                        <DrawerFooter>
                            <Headline3>Footer</Headline3>
                        </DrawerFooter>
                    )}
                </Drawer>
            </>
        );
    }

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('without Header', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo showHeader={false} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('without Footer', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo showFooter={false} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('without Actions', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo showActions={false} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('without close icon', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo hasClose={false} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('close icon placement: left', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo closePlacement="left" />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('close by overlay click', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Demo closeOnOverlayClick />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').first().click();
        cy.get('.plasma-drawer').should('be.visible');
        cy.get('body').click(5, 5);

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('#plasma-popup-root').should('be.empty');
    });

    it('close X', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <PopupBaseProvider>
                    <Demo showActions={false} />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').first().click();
        cy.get('.plasma-drawer').should('be.visible');
        cy.get('.plasma-drawer svg').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('#plasma-popup-root').should('be.empty');
    });

    it('placement: left', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo placement="left" />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('placement: top', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo placement="top" width="100vw" height="40vh" />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('placement: bottom', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <NoAnimationStyle />

                <PopupBaseProvider>
                    <Demo placement="bottom" width="100vw" height="40vh" />
                </PopupBaseProvider>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });
});
