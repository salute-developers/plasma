import React, { memo, useRef, useCallback, useEffect, useState } from 'react';
import type { HTMLAttributes, ReactNode, RefAttributes, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { usePopper } from 'react-popper';
import PopperJS from '@popperjs/core';

import { useFocusTrap, useForkRef } from '../../hooks';

const ESCAPE_KEYCODE = 27;

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
     * Расположение всплывающего окна. По умолчанию "auto".
     */
    placement?: PopoverPlacement | Array<PopoverBasicPlacement>;
    /**
     * Отступ окна относительно элемента, у которого оно вызвано.
     */
    offset?: [number, number];
    /**
     * Элемент, рядом с которым произойдет вызов всплывающего окна.
     */
    target?: ReactNode;
    /**
     * Стрелка над элементом.
     */
    arrow?: ReactNode;
    /**
     * Контент всплывающего окна.
     */
    children?: ReactNode;
    /**
     * Блокировать ли фокус на всплывающем окне.
     */
    isFocusTrapped?: boolean;
    /**
     * Событие сворачивания/разворачивания всплывающего окна.
     */
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    /**
     * Закрывать окно при нажатии вне области окна(по умолчанию true).
     */
    closeOnOverlayClick?: boolean;
    /**
     * Закрывать окно при нажатии ESC(по умолчанию true).
     */
    closeOnEsc?: boolean;
}

const StyledRoot = styled.div`
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
`;

const StyledPopover = styled.div`
    position: absolute;
    z-index: 1;

    /* stylelint-disable selector-max-id */
    &[data-popper-placement^='top'] > #popover-arrow {
        bottom: -0.25rem;
    }

    &[data-popper-placement^='bottom'] > #popover-arrow {
        top: -0.25rem;
    }

    &[data-popper-placement^='left'] > #popover-arrow {
        right: -0.25rem;
    }

    &[data-popper-placement^='right'] > #popover-arrow {
        left: -0.25rem;
    }
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
        (
            {
                target,
                children,
                isOpen,
                trigger,
                arrow,
                placement = 'auto',
                offset = [0, 0],
                isFocusTrapped = false,
                closeOnOverlayClick = true,
                closeOnEsc = true,
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
                <StyledRoot
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
                                <div
                                    id="popover-arrow"
                                    ref={setArrowElement}
                                    style={styles.arrow}
                                    {...attributes.arrow}
                                >
                                    {arrow}
                                </div>
                            )}
                            {children}
                        </StyledPopover>
                    )}
                </StyledRoot>
            );
        },
    ),
);
