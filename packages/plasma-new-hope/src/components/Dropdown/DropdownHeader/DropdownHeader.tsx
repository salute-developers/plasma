import React, { forwardRef } from 'react';
// import { useForkRef, useUniqId } from '@salutejs/plasma-core';
// import { styled } from '@linaria/react';

import { RootProps } from '../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { StyledDropdownHeader } from './DropdownHeader.styles';

type DropdownHeaderProps = any;

/**
 * Элемент выпадающего списка
 */
export const dropdownHeaderRoot = (Root: RootProps<HTMLDivElement, DropdownHeaderProps>) =>
    forwardRef<HTMLDivElement, DropdownHeaderProps>(
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
                    <StyledDropdownHeader {...rest}>{children}</StyledDropdownHeader>
                </Root>
            );
        },
    );

export const dropdownHeaderConfig = {
    name: 'DropdownHeader',
    tag: 'div',
    layout: dropdownHeaderRoot,
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
