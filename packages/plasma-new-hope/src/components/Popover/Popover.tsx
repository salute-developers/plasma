import React, { useRef, useCallback, useEffect, useLayoutEffect, useState, forwardRef, isValidElement } from 'react';
import { usePopper } from 'react-popper';
import type { RootProps } from 'src/engines';
import { useFocusTrap, useForkRef } from 'src/hooks';
import { cx, safeUseId } from 'src/utils';

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
            const outerOpened = Boolean(isOpen || opened);
            const isControlled = isOpen !== undefined || opened !== undefined;
            const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
            const innerIsOpen = isControlled ? outerOpened : uncontrolledIsOpen;

            // Refs используются в event-хендлерах (без отслеживания зависимостей)
            const rootRef = useRef<HTMLDivElement | null>(null);
            const popoverRef = useRef<HTMLDivElement | null>(null);
            const targetRef = useRef<HTMLDivElement | null>(null);

            // Стейт для элементов нужен usePopper: он должен видеть реальные DOM-элементы
            // на момент рендера, а не null. Callback-рефы обновляют стейт при монтировании.
            const [rootEl, setRootEl] = useState<HTMLDivElement | null>(null);
            const [popoverEl, setPopoverEl] = useState<HTMLDivElement | null>(null);
            const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

            const setRootRefs = useCallback((el: HTMLDivElement | null) => {
                rootRef.current = el;
                setRootEl(el);
            }, []);

            const setPopoverRefs = useCallback((el: HTMLDivElement | null) => {
                popoverRef.current = el;
                setPopoverEl(el);
            }, []);

            const trapRef = useFocusTrap(innerIsOpen && isFocusTrapped);
            const uuid = safeUseId();

            const handleRef = useForkRef<HTMLDivElement>(setRootRefs, outerRootRef);
            const popoverForkRef = useForkRef<HTMLDivElement>(setPopoverRefs, trapRef);

            const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(null);
            const [shouldRender, setShouldRender] = useState(innerIsOpen);

            const portalContainer =
                (typeof target === 'object' && target !== null && 'current' in target && target.current) || undefined;

            const isAutoArray = Array.isArray(placement);
            const isAuto = isAutoArray || (placement as PopoverPlacement).startsWith('auto');

            const openClass = innerIsOpen && shouldRender ? classes.open : undefined;
            const animatedClass = animated ? classes.animate : undefined;

            const isMobileDevice = typeof window !== 'undefined' ? window.matchMedia('(hover: none)').matches : false;

            const offsetInner = usePopoverOffset({
                handleRef: targetRef,
                placement: placement as string,
                offsetOuter: offset,
            });

            const { styles, attributes, forceUpdate } = usePopper(rootEl, popoverEl, {
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

            const handleToggle = useCallback(
                (nextIsOpen: boolean, event: React.SyntheticEvent | Event) => {
                    if (!isControlled) {
                        setUncontrolledIsOpen(nextIsOpen);
                    }
                    onToggle?.(nextIsOpen, event);
                },
                [isControlled, onToggle],
            );

            const onEscape = useCallback(
                (event: KeyboardEvent) => {
                    if (innerIsOpen && closeOnEsc && event.keyCode === ESCAPE_KEYCODE) {
                        handleToggle(false, event);
                    }
                },
                [closeOnEsc, innerIsOpen, handleToggle],
            );

            const onDocumentClick = useCallback(
                (event: MouseEvent) => {
                    if (innerIsOpen && closeOnOverlayClick) {
                        const targetIsRoot = event.target === rootRef.current;
                        const rootHasTarget = rootRef.current?.contains(event.target as Element);
                        const popoverRootHasTarget = popoverRef.current?.contains(event.target as Element);

                        if (!targetIsRoot && !rootHasTarget && !popoverRootHasTarget) {
                            handleToggle(false, event);
                        }
                    }
                },
                [closeOnOverlayClick, innerIsOpen, handleToggle],
            );

            const onClick = useCallback<React.MouseEventHandler>(
                (event) => {
                    event.persist();
                    if (trigger === 'click' || (trigger === 'hover' && isMobileDevice)) {
                        const targetIsPopover = event.target === popoverRef.current;
                        const rootHasTarget = popoverRef.current?.contains(event.target as Element);

                        if (!targetIsPopover && !rootHasTarget) {
                            handleToggle(!innerIsOpen, event);
                        }
                    }
                },
                [trigger, innerIsOpen, handleToggle],
            );

            const onMouseEnter = useCallback<React.MouseEventHandler>(
                (event) => {
                    if (trigger === 'hover') {
                        handleToggle(true, event);
                    }
                },
                [trigger, handleToggle],
            );

            const onMouseLeave = useCallback<React.MouseEventHandler>(
                (event) => {
                    if (trigger === 'hover') {
                        handleToggle(false, event);
                    }
                },
                [trigger, handleToggle],
            );

            const onFocus = useCallback<React.FocusEventHandler>(
                (event) => {
                    if (isMobileDevice) {
                        return;
                    }

                    if (trigger === 'hover') {
                        handleToggle(true, event);
                    }
                },
                [trigger, handleToggle],
            );

            const onBlur = useCallback<React.FocusEventHandler>(
                (event) => {
                    if (isMobileDevice) {
                        return;
                    }

                    if (trigger === 'hover') {
                        handleToggle(false, event);
                    }
                },
                [trigger, handleToggle],
            );

            useEffect(() => {
                document.addEventListener('click', onDocumentClick);
                return () => document.removeEventListener('click', onDocumentClick);
            }, [innerIsOpen, onToggle]);

            useEffect(() => {
                window.addEventListener('keydown', onEscape);
                return () => window.removeEventListener('keydown', onEscape);
            }, [closeOnEsc, innerIsOpen, onToggle]);

            useLayoutEffect(() => {
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

                setPortalEl(portal);
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
                        {children && portalEl && (
                            <Portal container={portalEl}>
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
