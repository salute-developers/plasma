import React, { forwardRef } from 'react';

import { RootProps } from '../../../../engines';
import { safeUseId } from '../../../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { StyledDropdownFooter } from './DropdownFooter.styles';
import type { DropdownFooterProps } from './DropdownFooter.type';

/**
 * Элемент выпадающего списка
 */
export const dropdownFooterRoot = (Root: RootProps<HTMLDivElement, DropdownFooterProps>) =>
    forwardRef<HTMLDivElement, DropdownFooterProps>(
        ({ id, className, children, view, size, ...rest }, outerRootRef) => {
            const uniqId = safeUseId();
            const innerId = id || uniqId;

            return (
                <Root id={innerId} ref={outerRootRef} view={view} size={size}>
                    <StyledDropdownFooter className={className} {...rest}>
                        {children}
                    </StyledDropdownFooter>
                </Root>
            );
        },
    );

export const dropdownFooterConfig = {
    name: 'DropdownFooter',
    tag: 'div',
    layout: dropdownFooterRoot,
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
