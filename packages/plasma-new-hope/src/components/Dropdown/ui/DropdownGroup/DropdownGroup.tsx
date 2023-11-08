import React, { forwardRef } from 'react';
import { useUniqId } from '@salutejs/plasma-core';

import { RootProps } from '../../../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { StyledDropdownGroup, StyledDropdownLabel } from './DropdownGroup.styles';
import type { DropdownGroupProps } from './DropdownGroup.type';

/**
 * Элемент группы выпадающего списка
 */
export const dropdownGroupRoot = (Root: RootProps<HTMLDivElement, DropdownGroupProps>) =>
    forwardRef<HTMLDivElement, DropdownGroupProps>(
        ({ id, labelClassName, groupClassName, label, children, role, view, size, ...rest }, outerRootRef) => {
            const uniqId = useUniqId();
            const innerId = id || uniqId;

            return (
                <Root id={innerId} ref={outerRootRef} view={view} size={size} role={role}>
                    <StyledDropdownLabel className={labelClassName}>{label}</StyledDropdownLabel>
                    <StyledDropdownGroup className={groupClassName} {...rest}>
                        {children}
                    </StyledDropdownGroup>
                </Root>
            );
        },
    );

export const dropdownGroupConfig = {
    name: 'DropdownGroup',
    tag: 'div',
    layout: dropdownGroupRoot,
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
