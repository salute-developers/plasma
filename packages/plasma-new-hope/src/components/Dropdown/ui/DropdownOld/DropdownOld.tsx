import React, { forwardRef, useRef } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import type { RootProps } from 'src/engines';
import { safeUseId } from 'src/utils';
import { useFocusTrap } from 'src/hooks';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { StyledDropdown, StyledPopover } from './Dropdown.styles';
import { getPlacements } from './utils';
import type { DropdownProps } from './Dropdown.types';

/**
 * Выпадающий список без внешнего контроля видимости.
 */
export const dropdownOldRoot = (Root: RootProps<HTMLDivElement, DropdownProps>) =>
    forwardRef<HTMLDivElement, DropdownProps>(
        (
            {
                id,
                target,
                children,
                hasArrow,
                role,
                view,
                size,
                frame,
                onToggle,
                isFocusTrapped = true,
                isOpen = false,
                opened = false,
                placement = 'auto',
                trigger = 'click',
                offset = [0, 6],
                preventOverflow = false,
                closeOnOverlayClick = false,
                closeOnEsc = false,
                ...rest
            },
            outerRootRef,
        ) => {
            const innerIsOpen = Boolean(isOpen || opened);

            const uniqId = safeUseId();
            const innerId = id || uniqId;

            const rootRef = useRef<HTMLDivElement | null>(null);
            const dropdownRef = useRef<HTMLDivElement | null>(null);
            const handleRef = useForkRef<HTMLDivElement>(rootRef, outerRootRef);

            const trapRef = useFocusTrap(innerIsOpen && isFocusTrapped);

            const dropdownForkRef = useForkRef<HTMLDivElement>(dropdownRef, trapRef);

            return (
                <StyledPopover
                    role={role}
                    opened={innerIsOpen}
                    usePortal={false}
                    onToggle={(is, event) => onToggle?.(is, event)}
                    id={innerId}
                    ref={dropdownForkRef}
                    target={target}
                    offset={offset}
                    preventOverflow={preventOverflow}
                    hasArrow={hasArrow}
                    placement={getPlacements(placement)}
                    trigger={trigger}
                    closeOnOverlayClick={closeOnOverlayClick}
                    closeOnEsc={closeOnEsc}
                    isFocusTrapped={isFocusTrapped}
                    frame={frame}
                >
                    <Root ref={handleRef} view={view} size={size} {...rest}>
                        <StyledDropdown>{children}</StyledDropdown>
                    </Root>
                </StyledPopover>
            );
        },
    );

export const dropdownOldConfig = {
    name: 'Dropdown',
    tag: 'div',
    layout: dropdownOldRoot,
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
        view: 'default',
        size: 'm',
    },
};
