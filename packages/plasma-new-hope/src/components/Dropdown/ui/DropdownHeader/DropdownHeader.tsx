import React, { forwardRef } from 'react';
import { useUniqId } from '@salutejs/plasma-core';

import { RootProps } from '../../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { StyledDropdownHeader } from './DropdownHeader.styles';
import type { DropdownHeaderProps } from './DropdownHeader.type';

/**
 * Элемент выпадающего списка
 */
export const dropdownHeaderRoot = (Root: RootProps<HTMLDivElement, DropdownHeaderProps>) =>
    forwardRef<HTMLDivElement, DropdownHeaderProps>(
        ({ id, className, view, size, children, ...rest }, outerRootRef) => {
            const uniqId = useUniqId();
            const innerId = id || uniqId;

            return (
                <Root id={innerId} ref={outerRootRef} view={view} size={size}>
                    <StyledDropdownHeader className={className} {...rest}>
                        {children}
                    </StyledDropdownHeader>
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
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
