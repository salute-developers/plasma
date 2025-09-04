import React, { forwardRef } from 'react';
import cls from 'classnames';
import { styled } from '@linaria/react';

import { RootProps } from '../../engines';

import { NavigationDrawerProps } from './NavigationDrawer.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base, Content, Footer, Overlay } from './NavigationDrawer.styles';
import { Section } from './ui/Section';
import { classes } from './NavigationDrawer.tokens';

const Wrapper = styled.div``;

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
        const isOpen = opened || !withContentLeft;

        const isOverlay = mode === 'overlay' || mode === 'drawer';

        return (
            <Root ref={ref} {...rest}>
                <Wrapper
                    className={cls(
                        classes.navigationDrawerSidebar,
                        isOverlay && classes.navigationDrawerSidebarOverlay,
                        !isOpen && classes.navigationDrawerSidebarClosed,
                    )}
                >
                    {header}

                    {sections.map(({ items, label, hasDivider }, index) => (
                        <Section
                            key={index}
                            items={items}
                            label={label}
                            withContentLeft={withContentLeft}
                            isOpen={isOpen}
                            hasDivider={hasDivider}
                        />
                    ))}

                    {footer && <Footer>{footer}</Footer>}
                </Wrapper>
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
