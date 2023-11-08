import React, { useRef, useCallback, useEffect, useState, forwardRef } from 'react';
import { usePopper } from 'react-popper';
import { useFocusTrap, useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines/types';

import type { PopoverPlacement, PopoverProps } from './Popover.types';
import { ESCAPE_KEYCODE, getAutoPlacements, getPlacement } from './utils';
import { StyledArrow, StyledPopover, StyledRoot } from './styles';

/**
 * Всплывающее окно с возможностью позиционирования
 * и вызова по клику либо ховеру.
 */
export const popoverRoot = (Root: RootProps<HTMLDivElement, PopoverProps>) =>
    forwardRef<HTMLDivElement, PopoverProps>(
        (
            {
                target,
                children,
                isOpen,
                trigger,
                arrow,
                placement = 'auto',
                offset = [0, 0],
                isFocusTrapped = true,
                closeOnOverlayClick = true,
                closeOnEsc = true,
                preventOverflow = true,
                onToggle,
                ...rest
            },
            outerRootRef,
        ) => {
            const rootRef = useRef<HTMLDivElement | null>(null);
            const popoverRef = useRef<HTMLDivElement | null>(null);
            const handleRef = useForkRef<HTMLDivElement>(rootRef, outerRootRef);

            const trapRef = useFocusTrap(isOpen && isFocusTrapped);

            const popoverForkRef = useForkRef<HTMLDivElement>(popoverRef, trapRef);

            const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(null);

            const isAutoArray = Array.isArray(placement);
            const isAuto = isAutoArray || placement === 'auto';

            const { styles, attributes, forceUpdate } = usePopper(rootRef.current, popoverRef.current, {
                placement: getPlacement(isAutoArray ? 'auto' : (placement as PopoverPlacement)),
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: preventOverflow,
                        },
                    },
                    { name: 'offset', options: { offset: [offset[0], offset[1]] } },
                    {
                        name: 'flip',
                        enabled: isAuto,
                        options: {
                            allowedAutoPlacements: getAutoPlacements(
                                isAutoArray ? (placement as PopoverPlacement[]) : [],
                            ),
                        },
                    },
                    { name: 'arrow', options: { element: arrowElement } },
                ],
            });

            const onEscape = useCallback(
                (event: KeyboardEvent) => {
                    if (isOpen && closeOnEsc && event.keyCode === ESCAPE_KEYCODE) {
                        onToggle?.(false, event);
                    }
                },
                [closeOnEsc, isOpen, onToggle],
            );

            const onDocumentClick = useCallback(
                (event: MouseEvent) => {
                    if (isOpen && closeOnOverlayClick && onToggle) {
                        const targetIsRoot = event.target === rootRef.current;
                        const rootHasTarget = rootRef.current?.contains(event.target as Element);

                        if (!targetIsRoot && !rootHasTarget) {
                            onToggle(false, event);
                        }
                    }
                },
                [closeOnOverlayClick, isOpen, onToggle],
            );

            const onClick = useCallback<React.MouseEventHandler>(
                (event) => {
                    if (trigger === 'click') {
                        const targetIsPopover = event.target === popoverRef.current;
                        const rootHasTarget = popoverRef.current?.contains(event.target as Element);

                        if (!targetIsPopover && !rootHasTarget) {
                            onToggle?.(!isOpen, event);
                        }
                    }
                },
                [trigger, isOpen, onToggle],
            );

            const onMouseEnter = useCallback<React.MouseEventHandler>(
                (event) => {
                    if (trigger === 'hover') {
                        onToggle?.(true, event);
                    }
                },
                [trigger, onToggle],
            );

            const onMouseLeave = useCallback<React.MouseEventHandler>(
                (event) => {
                    if (trigger === 'hover') {
                        onToggle?.(false, event);
                    }
                },
                [trigger, onToggle],
            );

            const onFocus = useCallback<React.FocusEventHandler>(
                (event) => {
                    if (trigger === 'hover') {
                        onToggle?.(true, event);
                    }
                },
                [trigger, onToggle],
            );

            const onBlur = useCallback<React.FocusEventHandler>(
                (event) => {
                    if (trigger === 'hover') {
                        onToggle?.(false, event);
                    }
                },
                [trigger, onToggle],
            );

            useEffect(() => {
                document.addEventListener('click', onDocumentClick);
                return () => document.removeEventListener('click', onDocumentClick);
            }, [closeOnOverlayClick, isOpen, onToggle]);

            useEffect(() => {
                window.addEventListener('keydown', onEscape);
                return () => window.removeEventListener('keydown', onEscape);
            }, [closeOnEsc, isOpen, onToggle]);

            useEffect(() => {
                if (!isOpen || !forceUpdate) {
                    return;
                }

                /*
                 * INFO: Метод forceUpdate содержит в себе flushSync и приводит
                 * к повторному рендеру компонента, который уже находится в процессе рендера.
                 * Данный хак, нужен для того, чтобы это поведение избежать и перенаправить
                 * вызов метода в очередь микрозадач.
                 */
                Promise.resolve().then(forceUpdate);
            }, [isOpen, forceUpdate]);

            return (
                <Root
                    ref={handleRef}
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...rest}
                >
                    {target}
                    {children && (
                        <StyledPopover
                            {...attributes.popper}
                            ref={popoverForkRef}
                            style={{ ...styles.popper, ...{ display: isOpen ? 'block' : 'none' } }}
                        >
                            {arrow && (
                                <StyledArrow
                                    id="popover-arrow"
                                    ref={setArrowElement}
                                    style={styles.arrow}
                                    {...attributes.arrow}
                                >
                                    {arrow}
                                </StyledArrow>
                            )}
                            {children}
                        </StyledPopover>
                    )}
                </Root>
            );
        },
    );

export const popoverConfig = {
    name: 'Popover',
    tag: 'div',
    layout: popoverRoot,
    base: StyledRoot,
    variations: {},
    defaults: {},
};
