import React, { memo, useRef, useCallback, useEffect, useState } from 'react';
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
     * Стрелка над элементом показывается или нет.
     */
    showArrow?: boolean;
    /**
     * Элемент, при нажатии на который произойдет вызов всплывающего окна.
     */
    target?: ReactNode;
    /**
     * Контент всплывающего окна.
     */
    children?: ReactNode;
    /**
     * Событие сворачивания/разворачивания всплывающего окна.
     */
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    /**
     * Закрывать окно при нажатии вне области окна(по умолчанию true),
     */
    closeOnOverlayClick: boolean;
}

const StyledRoot = styled.div`
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
`;

const StyledArrow = styled.div`
    visibility: hidden;

    &,
    &::before {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background: inherit;
    }

    &::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
    }
`;

const StyledPopover = styled.div`
    position: absolute;
    z-index: 1;

    &[data-popper-placement^='top'] > ${StyledArrow} {
        bottom: -0.25rem;
    }

    &[data-popper-placement^='bottom'] > ${StyledArrow} {
        top: -0.25rem;
    }

    &[data-popper-placement^='left'] > ${StyledArrow} {
        right: -0.25rem;
    }

    &[data-popper-placement^='right'] > ${StyledArrow} {
        left: -0.25rem;
    }

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
        (
            {
                target,
                children,
                isOpen,
                trigger,
                showArrow = false,
                placement = 'auto',
                closeOnOverlayClick = true,
                onToggle,
                ...rest
            },
            outerRootRef,
        ) => {
            const rootRef = useRef<HTMLDivElement | null>(null);
            const popoverRef = useRef<HTMLDivElement | null>(null);
            const handleRef = useForkRef<HTMLDivElement>(rootRef, outerRootRef);

            const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(null);

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
                    { name: 'arrow', options: { element: arrowElement } },
                ],
            });

            const onDocumentClick = useCallback(
                (event: MouseEvent) => {
                    console.log('closeOnOverlayClick', closeOnOverlayClick);
                    if (!closeOnOverlayClick) {
                        return;
                    }
                    const targetIsRoot = event.target === rootRef.current;
                    const rootHasTarget = rootRef.current?.contains(event.target as Element);

                    if (!targetIsRoot && !rootHasTarget) {
                        onToggle?.(false, event);
                    }
                },
                [onToggle, closeOnOverlayClick],
            );

            const onClick = useCallback<React.MouseEventHandler>(
                (event) => {
                    if (trigger === 'click') {
                        console.log('popover click');
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
            }, []);

            useEffect(() => {
                console.log('effect', isOpen);
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

            console.log(isOpen);

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
                            ref={popoverRef}
                            style={{ ...styles.popper, ...{ display: isOpen ? 'block' : 'none' } }}
                        >
                            {showArrow && (
                                <StyledArrow ref={setArrowElement} style={styles.arrow} {...attributes.arrow} />
                            )}
                            {children}
                        </StyledPopover>
                    )}
                </StyledRoot>
            );
        },
    ),
);
