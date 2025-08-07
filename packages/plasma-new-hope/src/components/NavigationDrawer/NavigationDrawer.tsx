import React, { forwardRef, useMemo } from 'react';
import { styled } from '@linaria/react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import { NavigationDrawerProps } from './NavigationDrawer.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base, contentOverlayStyles, contentStyles, overlayStyles } from './NavigationDrawer.styles';
import { Section } from './ui/Section';
import {
    baseSidebarStyles,
    siderbarClosedStyles,
    sidebarStyles,
    sidebarOverlayStyles,
} from './ui/Sidebar/Sidebar.styles';

const Footer = styled.div`
    margin-top: auto;
`;

export const navigationDrawerRoot = (Root: RootProps<HTMLDivElement, NavigationDrawerProps>) => {
    return forwardRef<HTMLDivElement, NavigationDrawerProps>((props, ref) => {
        const { children, ...rest } = props;
        const { opened, header, sections, footer, withContentLeft, mode, sidebarProps, onHide } = props;
        const isOpened = opened || !withContentLeft;

        const classByMode = useMemo(() => {
            if (mode === 'overlay' || mode === 'drawer') {
                return sidebarOverlayStyles;
            }

            return sidebarStyles;
        }, [mode]);

        return (
            <Root ref={ref} {...rest}>
                <div
                    className={cx(baseSidebarStyles, classByMode, !isOpened && siderbarClosedStyles)}
                    {...sidebarProps}
                >
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
                {mode === 'overlay' && opened && <div className={overlayStyles} onClick={onHide} />}
                <div className={cx(contentStyles, (mode === 'drawer' || mode === 'overlay') && contentOverlayStyles)}>
                    {children}
                </div>
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
