import React, { forwardRef } from 'react';
// import { useForkRef, useUniqId } from '@salutejs/plasma-core';
// import { styled } from '@linaria/react';

import { RootProps } from '../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { StyledDropdownFooter } from './DropdownFooter.styles';

type DropdownFooterProps = any;

/**
 * Элемент выпадающего списка
 */
export const dropdownFooterRoot = (Root: RootProps<HTMLDivElement, DropdownFooterProps>) =>
    forwardRef<HTMLDivElement, DropdownFooterProps>(
        (
            {
                // id,
                // className,
                children,
                // role,
                view,
                size,
                disabled,
                ...rest
            },
            outerRootRef,
        ) => {
            // const uniqId = useUniqId();
            // const innerId = id || uniqId;

            return (
                <Root view={view} size={size} disabled={disabled}>
                    <StyledDropdownFooter {...rest}>{children}</StyledDropdownFooter>
                </Root>
            );
        },
    );

export const dropdownFooterConfig = {
    name: 'DropdownFooter',
    tag: 'div',
    layout: dropdownFooterRoot,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
