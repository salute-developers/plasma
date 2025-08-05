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

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    padding: 12px;
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
                    {header}

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
                                    {!withContentLeft && (
                                        <div className={classes.navigationDrawerMenuItemIcon}>
                                            <IconDisclosureDownCentered />
                                        </div>
                                    )}
                                </SectionHeader>
                            ) : (
                                <Divider className={classes.navigationDrawerDivider} />
                            )}

                            {section.items.map((item, index) => {
                                const onClick =
                                    item.action && typeof item.action !== 'string' && !item.disabled
                                        ? item.action
                                        : undefined;
                                const menuClasses = cx(
                                    classes.navigationDrawerMenuItem,
                                    item.selected && classes.navigationDrawerMenuItemSelected,
                                    item.disabled && classes.navigationDrawerMenuItemDisabled,
                                );
                                const menuItemContent = (
                                    <>
                                        {item.icon && withContentLeft && (
                                            <div className={classes.navigationDrawerMenuItemIcon}>{item.icon}</div>
                                        )}
                                        {isOpened && item.label}
                                    </>
                                );
                                return typeof item.action === 'string' ? (
                                    <Link
                                        className={menuClasses}
                                        key={String(item.label) + index}
                                        href={item.action}
                                        rel="noopener noreferrer"
                                    >
                                        {menuItemContent}
                                    </Link>
                                ) : (
                                    <MenuItem
                                        className={menuClasses}
                                        key={String(item.label) + index}
                                        onClick={onClick}
                                    >
                                        {menuItemContent}
                                    </MenuItem>
                                );
                            })}
                        </Section>
                    ))}

                    <Footer>{footer}</Footer>
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
