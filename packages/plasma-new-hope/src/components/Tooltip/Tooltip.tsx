import React, { useEffect, forwardRef, useState } from 'react';
import { styled } from '@linaria/react';

import { RootProps, component } from '../../engines';
import { popoverClasses, popoverConfig, popoverTokens } from '../Popover';
import { cx } from '../../utils';

import { TooltipProps } from './Tooltip.types';
import { StyledContentLeft, TooltipRoot } from './Tooltip.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { classes, tokens } from './Tooltip.tokens';

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

    &.${classes.animated} .${popoverClasses.root} {
        transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
    }
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
                offset = [0, 8],
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
                ...rest
            },
            outerRef,
        ) => {
            const [ref, setRef] = useState<HTMLDivElement | null>(null);

            // TODO убрать после отказа от старого API
            const innerIsOpen = Boolean(isVisible || isOpen || opened);
            const innerHasArrow = arrow || hasArrow;
            const showTooltip = innerIsOpen && Boolean(text?.length);

            const animatedClass = animated ? classes.animated : undefined;

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

            const withContentLeft = contentLeft ? classes.hasContentLeft : undefined;

            return (
                <StyledPopover
                    opened={showTooltip}
                    placement={placement}
                    offset={offset}
                    zIndex={zIndex}
                    target={target || children}
                    usePortal={usePortal}
                    hasArrow={innerHasArrow}
                    aria-hidden={!innerIsOpen}
                    aria-live="polite"
                    role="tooltip"
                    className={cx(ref?.classList.toString(), animatedClass)}
                    {...rest}
                >
                    <Root view={view} size={size} ref={setRef} className={className} style={style}>
                        <TooltipRoot
                            ref={outerRef}
                            id={id}
                            className={cx(withContentLeft)}
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
