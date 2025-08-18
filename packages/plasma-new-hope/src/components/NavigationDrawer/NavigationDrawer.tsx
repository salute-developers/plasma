import React, { forwardRef } from 'react';
import cls from 'classnames';

import { RootProps } from '../../engines';

import { NavigationDrawerProps } from './NavigationDrawer.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base, Content, Footer, Overlay } from './NavigationDrawer.styles';
import { Section } from './ui/Section';
import { classes } from './NavigationDrawer.tokens';

export const navigationDrawerRoot = (
    Root: RootProps<
        HTMLDivElement,
        Omit<NavigationDrawerProps, 'opened' | 'header' | 'sections' | 'footer' | 'withContentLeft' | 'mode' | 'onHide'>
    >,
) => {
    return forwardRef<HTMLDivElement, NavigationDrawerProps>((props, ref) => {
        const {
            opened = true,
            header,
            sections,
            footer,
            withContentLeft = true,
            mode = 'static',
            onHide,
            children,
            ...rest
        } = props;
        const isOpened = opened || !withContentLeft;

        const isOverlay = mode === 'overlay' || mode === 'drawer';

        return (
            <Root ref={ref} {...rest}>
                <div
                    className={cls(
                        classes.navigationDrawerSidebar,
                        isOverlay && classes.navigationDrawerSidebarOverlay,
                        !isOpened && classes.navigationDrawerSidebarClosed,
                    )}
                >
                    {header}

                    {sections.map((section, index) => (
                        <Section
                            key={index}
                            items={section.items}
                            label={section.label}
                            withContentLeft={withContentLeft}
                            isOpened={isOpened}
                            hasDivider={section.hasDivider}
                        />
                    ))}

                    <Footer>{footer}</Footer>
                </div>
                {mode === 'overlay' && opened && <Overlay onClick={onHide} />}
                <Content className={cls(isOverlay && classes.navigationDrawerContentOverlay)}>{children}</Content>
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
