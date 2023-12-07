import React, { forwardRef, useRef } from 'react';
import { useFocusTrap, useForkRef, useUniqId } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { StyledDropdown, StyledPopover } from './Dropdown.styles';
import { classes } from './Dropdown.tokens';
import { getPlacements } from './utils';
import type { DropdownProps } from './Dropdown.types';

/**
 * Выпадающий список без внешнего контроля видимости.
 */
export const dropdownRoot = (Root: RootProps<HTMLDivElement, DropdownProps>) =>
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
                placement = 'auto',
                trigger = 'click',
                offset = [0, 6],
                preventOverflow = false,
                closeOnOverlayClick = false,
                closeOnEsc = false,
                isNested = false,
                ...rest
            },
            outerRootRef,
        ) => {
            const uniqId = useUniqId();
            const innerId = id || uniqId;

            const rootRef = useRef<HTMLDivElement | null>(null);
            const dropdownRef = useRef<HTMLDivElement | null>(null);
            const handleRef = useForkRef<HTMLDivElement>(rootRef, outerRootRef);

            const trapRef = useFocusTrap(isOpen && isFocusTrapped);

            const dropdownForkRef = useForkRef<HTMLDivElement>(dropdownRef, trapRef);

            const nestedClass = isNested ? classes.nestedDropdown : undefined;

            return (
                <StyledPopover
                    role={role}
                    isOpen={isOpen}
                    usePortal={false}
                    onToggle={(is, event) => onToggle?.(is, event)}
                    id={innerId}
                    ref={dropdownForkRef}
                    target={target}
                    offset={offset}
                    preventOverflow={preventOverflow}
                    className={cx(nestedClass)}
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

export const dropdownConfig = {
    name: 'Dropdown',
    tag: 'div',
    layout: dropdownRoot,
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
