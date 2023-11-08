import React, { forwardRef } from 'react';
// import { useForkRef, useUniqId } from '@salutejs/plasma-core';
// import { styled } from '@linaria/react';

import { RootProps, component } from '../../engines';
import { popoverConfig } from '../Popover';
// import { cx } from '../../utils';

// import { classes } from './Dropdown.tokens';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { StyledDropdown } from './Dropdown.styles';

// issue #823
const Popover = component(popoverConfig);

type DropdownProps = any;

/**
 * Выпадающий список без внешнего контроля видимости.
 */
export const dropdownRoot = (Root: RootProps<HTMLDivElement, DropdownProps>) =>
    forwardRef<HTMLDivElement, DropdownProps>(
        (
            {
                isOpen = false,
                onToggle,
                // id,
                // className,
                placement = 'bottom',
                target,
                offset = [0, 6],
                preventOverflow = false,
                children,
                // role,
                // ...rest
                view,
                size,
                disabled,
            },
            outerRootRef,
        ) => {
            // const uniqId = useUniqId();
            // const innerId = id || uniqId;

            return (
                <Root view={view} size={size} disabled={disabled}>
                    <Popover
                        role="presentation"
                        isOpen={isOpen}
                        onToggle={(is) => onToggle(is)}
                        id="popover"
                        target={target}
                        offset={offset}
                        preventOverflow={preventOverflow}
                        // arrow={<StyledArrow />}
                        placement={placement}
                        trigger="click"
                        closeOnOverlayClick={false}
                        closeOnEsc
                        isFocusTrapped
                    >
                        <StyledDropdown>{children}</StyledDropdown>
                    </Popover>
                </Root>
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
