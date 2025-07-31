import React, { forwardRef } from 'react';
import { styled } from '@linaria/react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';
import { IconDisclosureDownCentered } from '../_Icon';

import { NavigationDrawerProps } from './NavigationDrawer.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './NavigationDrawer.styles';
import { classes } from './NavigationDrawer.tokens';

const Section = styled.div``;

const SectionHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 12px;
    align-items: center;
`;

const Sidebar = styled.div`
    width: 100%;
    overflow-y: auto;
`;

const MenuItem = styled.div`
    padding: 12px;
`;

const Footer = styled.div`
    margin-top: auto;
`;

const Divider = styled.div`
    height: 1px;
`;

export const navigationDrawerRoot = (Root: RootProps<HTMLDivElement, NavigationDrawerProps>) => {
    return forwardRef<HTMLDivElement, NavigationDrawerProps>((props, ref) => {
        const { children, ...rest } = props;
        const { opened, header, sections, footer, withContentLeft } = props;
        const isOpened = opened || !withContentLeft;

        return (
            <Root ref={ref} {...rest}>
                <Sidebar
                    className={cx(classes.navigationDrawerSidebar, !isOpened && classes.navigationDrawerSidebarClosed)}
                >
                    {/* TODO узнать что делать с header, когда меню скрыто */}
                    {isOpened && header}

                    {sections.map((section, index) => (
                        <Section className={classes.navigationDrawerSection} key={String(section.label) + index}>
                            {section.label ? (
                                <SectionHeader className={classes.navigationDrawerSectionHeader}>
                                    {withContentLeft && section.label && (
                                        <div className={classes.navigationDrawerMenuItemIcon}>
                                            <IconDisclosureDownCentered />
                                        </div>
                                    )}
                                    {isOpened && section.label}
                                </SectionHeader>
                            ) : (
                                <Divider className={classes.navigationDrawerDivider} />
                            )}

                            {section.items.map((item, index) => (
                                <MenuItem className={classes.navigationDrawerMenuItem} key={String(item.label) + index}>
                                    {item.icon && (
                                        <div className={classes.navigationDrawerMenuItemIcon}>{item.icon}</div>
                                    )}
                                    {isOpened && item.label}
                                </MenuItem>
                            ))}
                        </Section>
                    ))}

                    {/* TODO узнать что делать с footer, когда меню скрыто */}
                    {isOpened && <Footer>{footer}</Footer>}
                </Sidebar>
                <div className={classes.navigationDrawerContent}>{children}</div>
            </Root>
        );
    });
};

export const navigationDrawerConfig = {
    name: 'NavigationDrawer',
    tag: 'div',
    layout: navigationDrawerRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
