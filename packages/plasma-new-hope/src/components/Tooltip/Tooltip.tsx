import React, { useEffect, forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { RootProps, component } from 'src/engines';
import { canUseDOM, cx } from 'src/utils';

import { popoverConfig, popoverTokens } from '../Popover';

import { useDelayedTooltip } from './hooks';
import { TooltipProps } from './Tooltip.types';
import { StyledContentLeft, TooltipRoot } from './Tooltip.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { tokens } from './Tooltip.tokens';

const ESCAPE_KEYCODE = 27;

const getStringValue = (value?: number | string) => {
    return typeof value === 'number' ? `${value}rem` : value;
};

const Popover = component(popoverConfig);

const StyledPopover = styled(Popover)`
    ${popoverTokens.arrowMaskWidth}: var(${tokens.arrowMaskWidth});
    ${popoverTokens.arrowMaskHeight}: var(${tokens.arrowMaskHeight});
    ${popoverTokens.arrowMaskImage}: var(${tokens.arrowMaskImage});
    ${popoverTokens.arrowBackground}: var(${tokens.arrowBackground});
    ${popoverTokens.arrowHeight}: var(${tokens.arrowHeight});
    ${popoverTokens.arrowEdgeMargin}: var(${tokens.arrowEdgeMargin});
`;

/**
 * Компонент для текстовых подсказок. Основное предназначение — подписи к блокам.
 */

export const tooltipRoot = (Root: RootProps<HTMLDivElement, Omit<TooltipProps, 'opened' | 'text'>>) =>
    forwardRef<HTMLDivElement, TooltipProps>(
        (
            {
                id,
                text,
                opened,
                isVisible,
                isOpen,
                hasArrow = true,
                arrow,
                animated,
                offset = [3, 8],
                minWidth,
                maxWidth,
                placement = 'bottom',
                usePortal = true,
                target,
                children,
                onDismiss,
                view,
                size,
                contentLeft,
                zIndex = '9200',
                className,
                style,
                hoverTimeout,
                mouseEnterDelay = 0,
                mouseLeaveDelay,
                trigger,
                ...rest
            },
            outerRef,
        ) => {
            const [ref, setRef] = useState<HTMLDivElement | null>(null);

            mouseLeaveDelay = mouseLeaveDelay ?? hoverTimeout ?? 300;

            const { opened: openedState, showTooltip, hideTooltip, resetTooltip, setOpened } = useDelayedTooltip(
                mouseEnterDelay,
                mouseLeaveDelay,
            );
            const ignoreNextFocusRef = useRef(false);

            const isTooltipOpened = Boolean(text) && (isVisible || isOpen || opened || openedState);

            useEffect(() => {
                const onKeyDown = (event: KeyboardEvent) => {
                    if (event.keyCode === ESCAPE_KEYCODE) {
                        onDismiss?.();
                    }
                };

                window.addEventListener('keydown', onKeyDown);

                return () => {
                    window.removeEventListener('keydown', onKeyDown);
                };
            }, []);

            useEffect(() => {
                if (trigger !== 'hover') {
                    ignoreNextFocusRef.current = false;
                    return undefined;
                }

                const onVisibilityChange = () => {
                    if (canUseDOM && document.visibilityState === 'hidden') {
                        ignoreNextFocusRef.current = true;
                        resetTooltip();
                    }
                };

                const onUserInteraction = () => {
                    ignoreNextFocusRef.current = false;
                };

                document.addEventListener('visibilitychange', onVisibilityChange);
                document.addEventListener('pointerdown', onUserInteraction, true);
                document.addEventListener('keydown', onUserInteraction, true);

                return () => {
                    document.removeEventListener('visibilitychange', onVisibilityChange);
                    document.removeEventListener('pointerdown', onUserInteraction, true);
                    document.removeEventListener('keydown', onUserInteraction, true);
                };
            }, [resetTooltip, trigger]);

            const onToggle = (isOpen: boolean, event: React.SyntheticEvent | Event) => {
                if (canUseDOM && isOpen && document.visibilityState === 'hidden') {
                    return;
                }

                if (isOpen && event.type === 'focus' && ignoreNextFocusRef.current) {
                    // Возврат на вкладку восстанавливает фокус последнего активного target,
                    // но не является новым пользовательским действием для открытия Tooltip.
                    ignoreNextFocusRef.current = false;
                    return;
                }

                ignoreNextFocusRef.current = false;

                if (trigger === 'hover') {
                    if (isOpen) {
                        showTooltip();
                    } else {
                        hideTooltip();
                    }
                } else {
                    setOpened(isOpen);
                }
            };

            return (
                <StyledPopover
                    opened={isTooltipOpened}
                    placement={placement}
                    offset={offset}
                    zIndex={zIndex}
                    target={target || children}
                    usePortal={usePortal}
                    hasArrow={arrow || hasArrow}
                    aria-hidden={!isTooltipOpened}
                    aria-live="polite"
                    role="tooltip"
                    animated={animated}
                    className={cx(ref?.classList.toString())}
                    {...((trigger === 'hover' || trigger === 'click') && { trigger, onToggle })}
                    {...rest}
                >
                    <Root view={view} size={size} ref={setRef} className={className} style={style}>
                        <TooltipRoot
                            ref={outerRef}
                            id={id}
                            maxWidth={getStringValue(maxWidth)}
                            minWidth={getStringValue(minWidth)}
                        >
                            {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                            {text}
                        </TooltipRoot>
                    </Root>
                </StyledPopover>
            );
        },
    );

export const tooltipConfig = {
    name: 'Tooltip',
    tag: 'div',
    layout: tooltipRoot,
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
