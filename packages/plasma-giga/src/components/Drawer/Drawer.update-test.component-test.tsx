import React from 'react';
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
    customBackgroundColor?: string;
    customContentBackgroundColor?: string;
    withBlur?: boolean;
};

const Icon = () => <IconDone color="inherit" size="s" />;

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

describe('plasma-giga: Drawer', () => {
    const PopupProvider = getComponent('PopupProvider');
    const Drawer = getComponent('Drawer');
    const DrawerHeader = getComponent('DrawerHeader');
    const DrawerContent = getComponent('DrawerContent');
    const DrawerFooter = getComponent('DrawerFooter');
    const Button = getComponent('Button');
    const H3 = getComponent('H3');
    const H4 = getComponent('H4');

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
            closeOnEsc = true,
            closeOnOverlayClick = false,
            customBackgroundColor,
            customContentBackgroundColor,
            withBlur,
        } = props;

        return (
            <div style={{ height: '480px', width: '500px' }}>
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
                    withBlur={withBlur}
                    customBackgroundColor={customBackgroundColor}
                    customContentBackgroundColor={customContentBackgroundColor}
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
                        {showHeader && <H3>Header</H3>}
                    </DrawerHeader>
                    <DrawerContent>
                        <H4>Content</H4>
                    </DrawerContent>
                    {showFooter && (
                        <DrawerFooter>
                            <H3>Footer</H3>
                        </DrawerFooter>
                    )}
                </Drawer>
            </div>
        );
    }

    it('[PLASMA-T1618] Drawer: placement=top, withBlur, asModal, closeOnEsc, showHeader, showFooter, showActions, hasClose, closePlacement=right, width=50vw, height: 100dvh, borderRadius=none', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Demo placement="top" withBlur closeOnEsc borderRadius="none" />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();

        cy.get('button').first().type('{esc}', { force: true });
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T1619] Drawer: placement=bottom, asModal, closeOnOverlayClick, hasClose, closePlacement=left, width=20vw, borderRadius=default', () => {
        cy.viewport(1000, 500);

        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Demo
                        placement="bottom"
                        closeOnOverlayClick
                        showHeader={false}
                        showFooter={false}
                        showActions={false}
                        closePlacement="left"
                        width="20vw"
                        borderRadius="default"
                    />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('.popup-base-root').should('be.visible');

        cy.matchImageSnapshot();

        cy.get('body').click(5, 5);
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T1620] Drawer: placement=right, hasClose=false', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />

                <PopupProvider>
                    <Demo placement="right" hasClose={false} />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();

        cy.get('body').click(5, 5);
        cy.get('.popup-base-root').should('be.visible');

        cy.get('button').first().type('{esc}', { force: true });
        cy.get('.popup-base-root').should('be.visible');
    });

    it('[PLASMA-T1621] Drawer: placement=left, height=20dvh', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />

                <PopupProvider>
                    <Demo placement="left" height="20dvh" />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1978] Drawer: close by cross click', () => {
        mount(
            <CypressTestDecorator>
                <PopupProvider>
                    <Demo showActions={false} />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').first().click();
        cy.get('.plasma-drawer').should('be.visible');

        cy.get('.plasma-drawer svg').click();
        cy.get('.popup-base-root').should('not.exist');
    });

    it('[PLASMA-T1979] Drawer: customBackgroundColor, customContentBackgroundColor', () => {
        mount(
            <CypressTestDecorator>
                <NoAnimationStyle />

                <PopupProvider>
                    <Demo customContentBackgroundColor="red" customBackgroundColor="blue" />
                </PopupProvider>
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });
});
