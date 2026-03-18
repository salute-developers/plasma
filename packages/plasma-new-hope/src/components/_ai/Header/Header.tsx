import React, { forwardRef } from 'react';
import cls from 'classnames';
import type { RootProps } from 'src/engines';

import type { HeaderProps } from './Header.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base, ActionWrapper, Content, Title, Description } from './Header.styles';
import { classes } from './Header.tokens';

export const headerRoot = (Root: RootProps<HTMLDivElement, Omit<HeaderProps, 'title'>>) =>
    forwardRef<HTMLDivElement, HeaderProps>(
        (
            { actionBefore, title, description, actionAfter, view, size, textAlign, hasDivider, className, ...rest },
            ref,
        ) => {
            return (
                <Root
                    ref={ref}
                    className={cls(className, { [classes.enableDivider]: hasDivider })}
                    view={view}
                    size={size}
                    {...rest}
                >
                    {actionBefore && <ActionWrapper>{actionBefore}</ActionWrapper>}
                    <Content className={cls({ [classes.textAlignCenter]: textAlign === 'center' })}>
                        <Title>{title}</Title>
                        {description && <Description>{description}</Description>}
                    </Content>
                    {actionAfter && <ActionWrapper>{actionAfter}</ActionWrapper>}
                </Root>
            );
        },
    );

export const headerConfig = {
    name: 'Header',
    tag: 'div',
    layout: headerRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
