import React, { useRef, useCallback, useEffect, useState, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { useFocusTrap, useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines/types';

import { base as viewCSS } from './variations/_view/base';
import type { PopoverPlacement, PopoverProps } from './Popover.types';
import { StyledArrow, StyledPopover, StyledRoot, Wrapper } from './Popover.styles';
import { classes } from './Popover.tokens';

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
                isOpen,
                trigger,
                hasArrow,
                frame = 'document',
                className,
                placement = 'auto',
                offset = [0, 0],
                zIndex,
                isFocusTrapped = true,
                closeOnOverlayClick = true,
                closeOnEsc = true,
                preventOverflow = true,
                usePortal = false,
                view,
                onToggle,
                ...rest
            },
            outerRootRef,
        ) => {
            const rootRef = useRef<HTMLDivElement | null>(null);
            const popoverRef = useRef<HTMLDivElement | null>(null);
            const handleRef = useForkRef<HTMLDivElement>(rootRef, outerRootRef);
            const portalRef = useRef<HTMLElement | null>(null);

            const trapRef = useFocusTrap(isOpen && isFocusTrapped);

            const popoverForkRef = useForkRef<HTMLDivElement>(popoverRef, trapRef);

            const [arrowElement, setArrowElement] = useState<HTMLSpanElement | null>(null);

            const [, forceRender] = useState(false);

            const isAutoArray = Array.isArray(placement);
            const isAuto = isAutoArray || (placement as PopoverPlacement).startsWith('auto');

            const { styles, attributes, forceUpdate } = usePopper(rootRef.current, popoverRef.current, {
                placement: isAutoArray ? 'auto' : (placement as PopoverPlacement),
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
                let portal = document.getElementById(POPOVER_PORTAL_ID);

                if (typeof frame !== 'string' && frame && frame.current) {
                    portal = frame.current;
                }

                if (!usePortal) {
                    portal = rootRef.current;
                }

                if (!portal) {
                    portal = document.createElement('div');
                    portal.setAttribute('id', POPOVER_PORTAL_ID);

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
            }, [isOpen, children, forceUpdate]);

            return (
                <Wrapper className={classes.wrapper}>
                    <StyledRoot
                        ref={handleRef}
                        onClick={onClick}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={classes.target}
                    >
                        {target}
                    </StyledRoot>
                    {children &&
                        portalRef.current &&
                        ReactDOM.createPortal(
                            <Root view={view} className={className} {...rest}>
                                <StyledPopover
                                    {...attributes.popper}
                                    className={classes.root}
                                    ref={popoverForkRef}
                                    style={{ ...styles.popper, ...{ display: isOpen ? 'block' : 'none' } }}
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
                                    {children}
                                </StyledPopover>
                            </Root>,
                            portalRef.current,
                        )}
                </Wrapper>
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
