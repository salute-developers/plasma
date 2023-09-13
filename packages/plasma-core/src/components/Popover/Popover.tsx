import React, { memo, useRef, useCallback, useEffect } from 'react';
import type { HTMLAttributes, ReactNode, RefAttributes, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { usePopper } from 'react-popper';
import PopperJS from '@popperjs/core';

import { useForkRef } from '../../hooks';

export type PopoverBasicPlacement = 'top' | 'bottom' | 'right' | 'left';
export type PopoverPlacement = PopoverBasicPlacement | 'auto';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Всплывающее окно раскрыто или нет.
     */
    isOpen?: boolean;
    /**
     * Способ всплывающего окна - наведение или клик мышью.
     */
    trigger: 'hover' | 'click';
    /**
     * Расположение всплывающего окна. По умолчанию "auto"
     */
    placement?: PopoverPlacement | Array<PopoverBasicPlacement>;
    /**
     * Элемент, при нажатии на который произойдет вызов всплывающего окна.
     */
    disclosure?: ReactNode;
    /**
     * Контент всплывающего окна.
     */
    children?: ReactNode;
    /**
     * Событие сворачивания/разворачивания всплывающего окна.
     */
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
}

const StyledRoot = styled.div`
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
`;

const StyledPopover = styled.div`
    position: absolute;
    z-index: 1;
    padding: var(--plasma-popup-padding);
    margin: var(--plasma-popup-margin);
    width: var(--plasma-popup-width);
`;

export const getPlacement = (placement: PopoverPlacement) => {
    return `${placement}-start` as PopperJS.Placement;
};

const getAutoPlacements = (placements?: PopoverPlacement[]) => {
    return (placements || []).map((placement) => getPlacement(placement));
};

/**
 * Всплывающее окно с возможностью позиционирования
 * и вызова по клику либо ховеру.
 */
export const Popover = memo<PopoverProps & RefAttributes<HTMLDivElement>>(
    React.forwardRef<HTMLDivElement, PopoverProps>(
        ({ disclosure, children, isOpen, trigger, placement = 'auto', onToggle, ...rest }, outerRootRef) => {
            const rootRef = useRef<HTMLDivElement | null>(null);
            const popoverRef = useRef<HTMLDivElement | null>(null);
            const handleRef = useForkRef<HTMLDivElement>(rootRef, outerRootRef);

            const isAutoArray = Array.isArray(placement);
            const isAuto = isAutoArray || placement === 'auto';

            const { styles, attributes, forceUpdate } = usePopper(rootRef.current, popoverRef.current, {
                placement: getPlacement(isAutoArray ? 'auto' : (placement as PopoverPlacement)),
                modifiers: [
                    {
                        name: 'flip',
                        enabled: isAuto,
                        options: {
                            allowedAutoPlacements: getAutoPlacements(
                                isAutoArray ? (placement as PopoverPlacement[]) : [],
                            ),
                        },
                    },
                ],
            });

            const onDocumentClick = useCallback(
                (event: MouseEvent) => {
                    const targetIsRoot = event.target === rootRef.current;
                    const rootHasTarget = rootRef.current?.contains(event.target as Element);

                    if (!targetIsRoot && !rootHasTarget) {
                        onToggle?.(false, event);
                    }
                },
                [onToggle],
            );

            const onClick = useCallback<React.MouseEventHandler>(
                (event) => {
                    if (trigger === 'click') {
                        if (!onToggle) {
                            return;
                        }
                        const targetIsPopover = event.target === popoverRef.current;
                        const rootHasTarget = popoverRef.current?.contains(event.target as Element);

                        if (!targetIsPopover && !rootHasTarget) {
                            onToggle(!isOpen, event);
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
            }, []);

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
                <StyledRoot
                    ref={handleRef}
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...rest}
                >
                    {disclosure}
                    {children && (
                        <StyledPopover
                            {...attributes.popper}
                            ref={popoverRef}
                            style={{ ...styles.popper, ...{ display: isOpen ? 'block' : 'none' } }}
                        >
                            {children}
                        </StyledPopover>
                    )}
                </StyledRoot>
            );
        },
    ),
);
