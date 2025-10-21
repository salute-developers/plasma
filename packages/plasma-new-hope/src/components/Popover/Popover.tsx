import React, { useRef, useCallback, useEffect, useState, forwardRef, isValidElement } from 'react';
import { usePopper } from 'react-popper';
import { useForkRef } from '@salutejs/plasma-core';

import type { RootProps } from '../../engines/types';
import { useFocusTrap } from '../../hooks';
import { cx, safeUseId } from '../../utils';
import { Portal } from '../Portal';
import { Resizable } from '../_Resizable';

import { base as viewCSS } from './variations/_view/base';
import type { PopoverPlacement, PopoverProps } from './Popover.types';
import { StyledArrow, StyledPopover, StyledRoot, StyledWrapper } from './Popover.styles';
import { classes } from './Popover.tokens';
import { usePopoverOffset } from './hooks/usePopoverOffset';

export const ESCAPE_KEYCODE = 27;
export const POPOVER_PORTAL_ID = 'plasma-popover-root';

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
                animated,
                isOpen,
                opened,
                trigger = 'click',
                hasArrow,
                frame = 'document',
                className,
                placement = 'auto',
                offset = [0, 0],
                zIndex,
                isFocusTrapped = true,
                closeOnEsc = true,
                preventOverflow = true,
                usePortal = false,
                resizable,
                view,
                onToggle,
                onResizeStart,
                onResizeEnd,
                closeOnOverlayClick,
                ...rest
            },
            outerRootRef,
        ) => {
            const innerIsOpen = Boolean(isOpen || opened);

            const rootRef = useRef<HTMLDivElement | null>(null);
            const popoverRef = useRef<HTMLDivElement | null>(null);
            const handleRef = useForkRef<HTMLDivElement>(rootRef, outerRootRef);
            const portalRef = useRef<HTMLElement | null>(null);
            const targetRef = useRef<HTMLDivElement | null>(null);

            const trapRef = useFocusTrap(innerIsOpen && isFocusTrapped);
            const uuid = safeUseId();

            const popoverForkRef = useForkRef<HTMLDivElement>(popoverRef, trapRef);

            const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(null);

            const [, forceRender] = useState(false);
            const [shouldRender, setShouldRender] = useState(innerIsOpen);

            const portalContainer =
                (typeof target === 'object' && target !== null && 'current' in target && target.current) || undefined;

            const isAutoArray = Array.isArray(placement);
            const isAuto = isAutoArray || (placement as PopoverPlacement).startsWith('auto');

            const openClass = innerIsOpen && shouldRender ? classes.open : undefined;
            const animatedClass = animated ? classes.animate : undefined;

            const offsetInner = usePopoverOffset({
                handleRef: targetRef,
                placement: placement as string,
                offsetOuter: offset,
            });

            const { styles, attributes, forceUpdate } = usePopper(rootRef.current, popoverRef.current, {
                // TODO: #1121
                // eslint-disable-next-line no-nested-ternary
                placement: isAutoArray
                    ? placement[0]?.endsWith('start')
                        ? 'auto-start'
                        : 'auto'
                    : (placement as PopoverPlacement),
                modifiers: [
                    {
                        name: 'preventOverflow',
                        options: {
                            mainAxis: preventOverflow,
                        },
                    },
                    { name: 'offset', options: { offset: [offsetInner[0], offsetInner[1]] } },
                    {
                        name: 'flip',
                        enabled: isAuto,
                        options: {
                            allowedAutoPlacements: isAutoArray ? (placement as PopoverPlacement[]) : [],
                        },
                    },
                    {
                        name: 'arrow',
                        options: {
                            element: arrowElement,
                        },
                    },
                ],
            });

            const onEscape = useCallback(
                (event: KeyboardEvent) => {
                    if (innerIsOpen && closeOnEsc && event.keyCode === ESCAPE_KEYCODE) {
                        onToggle?.(false, event);
                    }
                },
                [closeOnEsc, innerIsOpen, onToggle],
            );

            const onDocumentClick = useCallback(
                (event: MouseEvent) => {
                    if (innerIsOpen && closeOnOverlayClick && onToggle) {
                        const targetIsRoot = event.target === rootRef.current;
                        const rootHasTarget = rootRef.current?.contains(event.target as Element);
                        const popoverRootHasTarget = popoverRef.current?.contains(event.target as Element);

                        if (!targetIsRoot && !rootHasTarget && !popoverRootHasTarget) {
                            onToggle(false, event);
                        }
                    }
                },
                [closeOnOverlayClick, innerIsOpen, onToggle],
            );

            const onClick = useCallback<React.MouseEventHandler>(
                (event) => {
                    console.log('click on tool');
                    event.persist();
                    if (trigger === 'click') {
                        const targetIsPopover = event.target === popoverRef.current;
                        const rootHasTarget = popoverRef.current?.contains(event.target as Element);

                        if (!targetIsPopover && !rootHasTarget) {
                            onToggle?.(!innerIsOpen, event);
                        }
                    }
                },
                [trigger, innerIsOpen, onToggle],
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
            }, [innerIsOpen, onToggle]);

            useEffect(() => {
                window.addEventListener('keydown', onEscape);
                return () => window.removeEventListener('keydown', onEscape);
            }, [closeOnEsc, innerIsOpen, onToggle]);

            useEffect(() => {
                let portal = document.getElementById(POPOVER_PORTAL_ID);

                if (typeof frame !== 'string' && frame && frame.current) {
                    portal = frame.current;
                }

                if (typeof frame === 'string' && frame) {
                    portal = document.getElementById(frame);
                }

                if (!usePortal && isValidElement(target)) {
                    portal = rootRef.current;
                }

                if (!portal) {
                    const portalId = `${POPOVER_PORTAL_ID}-${uuid}`;

                    portal = document.createElement('div');
                    portal.setAttribute('id', portalId);

                    if (typeof frame === 'string' && frame !== 'document') {
                        document.getElementById(frame)?.appendChild(portal);
                    } else {
                        document.body.appendChild(portal);
                    }
                }

                portalRef.current = portal;

                /**
                 * Изменение стейта нужно для того, чтобы Popup
                 * отобразился после записи DOM элемента в portalRef.current
                 */
                forceRender(true);
            }, []);

            useEffect(() => {
                if (!innerIsOpen || !forceUpdate) {
                    return;
                }

                /*
                 * INFO: Метод forceUpdate содержит в себе flushSync и приводит
                 * к повторному рендеру компонента, который уже находится в процессе рендера.
                 * Данный хак, нужен для того, чтобы это поведение избежать и перенаправить
                 * вызов метода в очередь микрозадач.
                 */
                Promise.resolve().then(forceUpdate);
            }, [innerIsOpen, children, forceUpdate]);

            const handleTransitionEnd = () => {
                if (!innerIsOpen) {
                    setShouldRender(false);
                }
            };

            useEffect(() => {
                if (innerIsOpen) {
                    setShouldRender(true);
                }
            }, [innerIsOpen]);

            return (
                <Portal container={portalContainer} disabled={isValidElement(target)}>
                    <StyledWrapper
                        className={cx(classes.wrapper, !isValidElement(target) && classes.targetAsRef)}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        ref={targetRef}
                    >
                        <StyledRoot
                            ref={handleRef}
                            onClick={onClick}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            className={cx(className, classes.target)}
                        >
                            {isValidElement(target) && target}
                        </StyledRoot>
                        {children && portalRef.current && (
                            <Portal container={portalRef.current}>
                                <Root view={view} className={className} {...rest}>
                                    <StyledPopover
                                        {...attributes.popper}
                                        onTransitionEnd={handleTransitionEnd}
                                        className={cx(classes.root, openClass, animatedClass)}
                                        ref={popoverForkRef}
                                        style={{
                                            ...styles.popper,
                                            display: shouldRender || innerIsOpen ? 'block' : 'none',
                                        }}
                                        zIndex={zIndex}
                                    >
                                        {hasArrow && (
                                            <StyledArrow
                                                className={classes.arrow}
                                                ref={setArrowElement}
                                                style={styles.arrow}
                                                {...attributes.arrow}
                                            />
                                        )}
                                        <Resizable
                                            resizable={resizable}
                                            onResizeStart={onResizeStart}
                                            onResizeEnd={onResizeEnd}
                                        >
                                            {children}
                                        </Resizable>
                                    </StyledPopover>
                                </Root>
                            </Portal>
                        )}
                    </StyledWrapper>
                </Portal>
            );
        },
    );

export const popoverConfig = {
    name: 'Popover',
    tag: 'div',
    layout: popoverRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
