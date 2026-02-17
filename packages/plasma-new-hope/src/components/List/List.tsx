import React, { forwardRef, useMemo } from 'react';
import cls from 'classnames';

import { RootProps } from '../../engines';

import type { ListProps } from './List.types';
import { base } from './List.styles';
import { classes } from './List.tokens';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { ListContext } from './List.context';

export const listRoot = (Root: RootProps<HTMLUListElement, ListProps>) =>
    forwardRef<HTMLUListElement, ListProps>(
        ({ size, view, disabled, variant, className, children, ...rest }, outerRootRef) => {
            const contextValue = useMemo(() => ({ disabled }), [disabled]);

            return (
                <Root
                    ref={outerRootRef}
                    size={size}
                    view={view}
                    disabled={disabled}
                    className={cls(
                        classes.listRoot,
                        className,
                        variant === 'tight' ? classes.tightListItem : '',
                        disabled ? classes.disabledList : '',
                    )}
                    {...rest}
                >
                    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
                </Root>
            );
        },
    );

export const listConfig = {
    name: 'List',
    tag: 'ul',
    layout: listRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
