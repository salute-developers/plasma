import React, { useEffect, forwardRef, useState } from 'react';
import { styled } from '@linaria/react';
import { RootProps, component } from 'src/engines';
import { cx } from 'src/utils';

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

            const { opened: openedState, showTooltip, hideTooltip, setOpened } = useDelayedTooltip(
                mouseEnterDelay,
                mouseLeaveDelay,
            );

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

            const onToggle = (isOpen: boolean) => {
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
