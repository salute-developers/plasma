import React, { forwardRef } from 'react';
// import { useForkRef, useUniqId } from '@salutejs/plasma-core';
// import { styled } from '@linaria/react';

import { RootProps } from '../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { StyledDropdownDivider } from './DropdownDivider.styles';

type DropdownDividerProps = any;

/**
 * Элемент выпадающего списка
 */
export const dropdownDividerRoot = (Root: RootProps<HTMLDivElement, DropdownDividerProps>) =>
    forwardRef<HTMLDivElement, DropdownDividerProps>(
        (
            {
                // id,
                // className,
                // role,
                view,
                size,
                disabled,
                // ...rest
            },
            outerRootRef,
        ) => {
            // const uniqId = useUniqId();
            // const innerId = id || uniqId;

            return (
                <Root view={view} size={size} disabled={disabled}>
                    <StyledDropdownDivider />
                </Root>
            );
        },
    );

export const dropdownDividerConfig = {
    name: 'DropdownDivider',
    tag: 'div',
    layout: dropdownDividerRoot,
    base: '',
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
