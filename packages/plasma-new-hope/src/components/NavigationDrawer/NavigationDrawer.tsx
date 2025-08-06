import React, { forwardRef } from 'react';
import { styled } from '@linaria/react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import { NavigationDrawerProps } from './NavigationDrawer.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './NavigationDrawer.styles';
import { classes } from './NavigationDrawer.tokens';
import { Section } from './ui/Section';
import { sidebarStyles } from './ui/Sidebar/Sidebar.styles';

const Footer = styled.div`
    margin-top: auto;
`;

export const navigationDrawerRoot = (Root: RootProps<HTMLDivElement, NavigationDrawerProps>) => {
    return forwardRef<HTMLDivElement, NavigationDrawerProps>((props, ref) => {
        const { children, ...rest } = props;
        const { opened, header, sections, footer, withContentLeft } = props;
        const isOpened = opened || !withContentLeft;

        return (
            <Root ref={ref} {...rest}>
                <div className={cx(sidebarStyles, !isOpened && classes.navigationDrawerSidebarClosed)}>
                    {header}

                    {sections.map((section, index) => (
                        <Section
                            key={String(section.label) + index}
                            items={section.items}
                            label={section.label}
                            withContentLeft={withContentLeft}
                            isOpened={isOpened}
                        />
                    ))}

                    <Footer>{footer}</Footer>
                </div>
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
