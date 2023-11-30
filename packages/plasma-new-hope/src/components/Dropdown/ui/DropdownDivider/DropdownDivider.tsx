import React, { forwardRef } from 'react';
import { useUniqId } from '@salutejs/plasma-core';

import { RootProps } from '../../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { StyledDropdownDivider } from './DropdownDivider.styles';
import type { DropdownDividerProps } from './DropdownDivider.types';

/**
 * Элемент выпадающего списка
 */
export const dropdownDividerRoot = (Root: RootProps<HTMLDivElement, DropdownDividerProps>) =>
    forwardRef<HTMLDivElement, DropdownDividerProps>(({ id, className, view, size, ...rest }, outerRootRef) => {
        const uniqId = useUniqId();
        const innerId = id || uniqId;

        return (
            <Root id={innerId} ref={outerRootRef} view={view} size={size}>
                <StyledDropdownDivider className={className} {...rest} />
            </Root>
        );
    });

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
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
