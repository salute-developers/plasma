import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconDone } from 'override/_Icon';

import type { DrawerOverlayProps, DrawerPlacement, DrawerProps } from './Drawer.types';
import type { DrawerHeaderProps } from './ui/DrawerHeader/DrawerHeader.types';
import type { DrawerContentProps } from './ui/DrawerContent/DrawerContent.types';
import type { DrawerFooterProps } from './ui/DrawerFooter/DrawerFooter.types';

const componentExists = hasComponent('Drawer');
const describeFn = getDescribeFN('Drawer');

const NoAnimationStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-max-id, selector-max-universal */
    * {
        animation: none !important;
    }
`;

type DrawerDemoProps = {
    width?: string;
    height?: string;
    placement?: DrawerPlacement;
    closeOnEsc?: boolean;
    closeOnOverlayClick?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    showActions?: boolean;
    closePlacement?: 'left' | 'right';
    hasClose?: boolean;
    asModal?: boolean;
    customBackgroundColor?: string;
    customContentBackgroundColor?: string;
    withBlur?: boolean;
    frame?: 'element' | 'document';
    overlayProps?: DrawerOverlayProps;
    borderRadius?: 'none' | 'default';
    withNoAnimation?: boolean;
    'data-testid'?: string;
};

describeFn('Drawer', () => {
    const getPopupProvider = () => {
        if (hasComponent('PopupProvider')) {
            return getComponent('PopupProvider');
        }
        if (hasComponent('PopupBaseProvider')) {
            return getComponent('PopupBaseProvider');
        }
        return () => null;
    };
    const getHeadline3 = () => {
        if (hasComponent('Headline3')) {
            return getComponent('Headline3');
        }
        if (hasComponent('H3')) {
            return getComponent('H3');
        }
        return 'h3';
    };
    const getHeadline4 = () => {
        if (hasComponent('Headline4')) {
            return getComponent('Headline4');
        }
        if (hasComponent('H4')) {
            return getComponent('H4');
        }
        return 'h4';
    };

    const PopupProvider = getPopupProvider() as React.ComponentType<{ children?: React.ReactNode }>;
    const Drawer = componentExists ? getComponent<DrawerProps>('Drawer') : () => null;
    const DrawerHeader = hasComponent('DrawerHeader') ? getComponent<DrawerHeaderProps>('DrawerHeader') : () => null;
    const DrawerContent = hasComponent('DrawerContent')
        ? getComponent<DrawerContentProps>('DrawerContent')
        : () => null;
    const DrawerFooter = hasComponent('DrawerFooter') ? getComponent<DrawerFooterProps>('DrawerFooter') : () => null;
    const Button = (hasComponent('Button') ? getComponent('Button') : 'button') as React.ElementType;
    const Headline3 = getHeadline3() as React.ElementType;
    const Headline4 = getHeadline4() as React.ElementType;

    const Icon = () => <IconDone color="inherit" size="s" />;

    function Demo(props: DrawerDemoProps) {
        const [isOpen, setIsOpen] = React.useState(false);
        const frameRef = React.useRef<HTMLDivElement>(null);
        const {
            width = '50vw',
            height,
            overlayProps,
            placement = 'right',
            closePlacement = 'right',
            hasClose = true,
            showHeader = true,
            showFooter = true,
            showActions = true,
            asModal = true,
            closeOnEsc = false,
            closeOnOverlayClick = false,
            customBackgroundColor,
            customContentBackgroundColor,
            withBlur,
            frame,
            borderRadius,
            withNoAnimation = true,
            'data-testid': testId,
        } = props;

        return (
            <PopupProvider>
                {withNoAnimation && <NoAnimationStyle />}
                <div ref={frameRef} style={{ height: '480px', width: '500px', position: 'relative' }}>
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
                        overlayProps={overlayProps}
                        frame={frame === 'element' ? frameRef : frame}
                        data-testid={testId}
                        borderRadius={borderRadius}
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
                                        <Icon />
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
                </div>
            </PopupProvider>
        );
    }

    it('simple', () => {
        mount(<Demo />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('without Header', () => {
        mount(<Demo showHeader={false} />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('without Footer', () => {
        mount(<Demo showFooter={false} />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('without Actions', () => {
        mount(<Demo showActions={false} />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('without close icon', () => {
        mount(<Demo hasClose={false} />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('close icon placement: left', () => {
        mount(<Demo closePlacement="left" />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('close by overlay click', () => {
        mount(<Demo closeOnOverlayClick withNoAnimation={false} />);

        cy.get('button').first().click();
        cy.get('.drawer-panel').should('be.visible');
        cy.get('body').click(5, 5);

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('.popup-base-root').should('not.exist');
    });

    it('props: overlayProps and default position in frame', () => {
        mount(<Demo frame="element" overlayProps={{ width: '280px', height: '320px' }} />);

        cy.get('button').click();

        cy.get('.drawer-overlay')
            .should('have.css', 'width', '280px')
            .and('have.css', 'height', '320px')
            .and('have.css', 'position', 'absolute');
    });

    ([undefined, 'document'] as const).forEach((frame) => {
        it(`default overlay position: fixed for ${frame ?? 'undefined'} frame`, () => {
            mount(<Demo frame={frame} />);

            cy.get('button').click();

            cy.get('.drawer-overlay').should('have.css', 'position', 'fixed');
        });
    });

    it('props: overlayProps.position overrides default position', () => {
        mount(<Demo frame="element" overlayProps={{ position: 'fixed' }} />);

        cy.get('button').click();

        cy.get('.drawer-overlay').should('have.css', 'position', 'fixed');
    });

    it('close by cross click', () => {
        mount(<Demo showActions={false} withNoAnimation={false} />);

        cy.get('button').first().click();
        cy.get('.drawer-panel').should('be.visible');
        cy.get('.plasma-drawer svg').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('.popup-base-root').should('not.exist');
    });

    it('close by Esc', () => {
        mount(<Demo closeOnEsc withNoAnimation={false} />);

        cy.get('button').first().click();
        cy.get('.drawer-panel').should('be.visible');
        cy.get('button').first().type('{esc}', { force: true });

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('.popup-base-root').should('not.exist');
    });

    it('placement: left', () => {
        mount(<Demo placement="left" />);

        cy.get('button').click();

        // TODO: #2217
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('placement: top', () => {
        mount(<Demo placement="top" width="100vw" height="40vh" />);

        cy.get('button').click();

        // TODO: #2217
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('placement: bottom', () => {
        mount(<Demo placement="bottom" width="100vw" height="40vh" />);

        cy.get('button').click();

        // TODO: #2217
        cy.matchImageSnapshot({
            failureThreshold: 0.02,
            failureThresholdType: 'percent',
        });
    });

    it('prop: data-attrs', () => {
        mount(<Demo data-testid="test-data-id" />);

        cy.get('button').click();

        cy.get('.popup-base-root').should('have.attr', 'data-testid', 'test-data-id');
    });

    it('props: customBackgroundColor, customContentBackgroundColor', () => {
        mount(<Demo customContentBackgroundColor="red" customBackgroundColor="blue" />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('withBlur', () => {
        mount(<Demo withBlur />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('borderRadius', () => {
        mount(<Demo borderRadius="default" />);

        cy.get('button').click();

        cy.matchImageSnapshot();
    });
});
