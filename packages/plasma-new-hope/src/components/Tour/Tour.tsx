import React, { forwardRef, useCallback, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useFloating, offset, flip, shift, autoUpdate, arrow, FloatingArrow, Placement } from '@floating-ui/react';
import { RootProps } from 'src/engines';
import { canUseDOM, safeUseId } from 'src/utils';

import { ARROW_HEIGHT, ARROW_PADDING, ARROW_POLYGON, ARROW_WIDTH } from '../_beta/Popover/Popover';

import { getHTMLElement } from './utils';
import type { TourProps, RootTourProps } from './Tour.types';
import { MaskContainer, Mask, Highlight, TourPortal } from './Tour.styles';
import { base as viewCSS } from './variatoins/_view/base';
import { base as sizeCSS } from './variatoins/_size/base';
import { classes, tokens } from './Tour.tokens';

export const tourRoot = (Root: RootProps<HTMLDivElement, RootTourProps>) =>
    forwardRef<HTMLDivElement, TourProps>(
        (
            {
                steps,
                current,
                defaultCurrent = 0,
                open,
                defaultOpen = false,
                withOverlay = true,
                overlayColor,
                zIndex = 9000,
                view,
                size,
                offset: offsetProp = [12, 12],
                highlightOffset = 4,
                highlightBorderRadius,
                hasTail = false,
                tailColor,
                renderStep,
                renderHighlight,
                onChange,
                onClose,
                ...rest
            },
            outerRef,
        ) => {
            const portalId = safeUseId();

            const isCurrentControlled = typeof current === 'number';
            const isOpenControlled = typeof open === 'boolean';

            const [innerCurrent, setInnerCurrent] = useState(defaultCurrent);
            const [innerOpen, setInnerOpen] = useState(defaultOpen);
            const [highlightRect, setHighlightRect] = useState<DOMRect | null>(null);

            const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

            const portalRef = useRef<HTMLElement | null>(null);
            const dialogRef = useRef<HTMLDivElement | null>(null);
            const arrowRef = useRef(null);
            const hasHighlightedRef = useRef(false);

            const active = isCurrentControlled ? (current as number) : innerCurrent;
            const isOpen = isOpenControlled ? (open as boolean) : innerOpen;

            const isFirstHighlight = !hasHighlightedRef.current && highlightRect !== null;
            if (isFirstHighlight) {
                hasHighlightedRef.current = true;
            }

            const currentStep = steps[active];

            const placement: Placement = currentStep?.placement || 'bottom';

            const middleware = [
                offset((hasTail ? ARROW_HEIGHT : 0) + offsetProp[0] + highlightOffset),
                flip(),
                shift({ padding: offsetProp[1] }),
                hasTail && arrow({ element: arrowRef, padding: ARROW_PADDING }),
            ];

            const { refs, floatingStyles, placement: calculatedPlacement, context } = useFloating({
                placement,
                middleware,
                whileElementsMounted: autoUpdate,
            });

            const setFloatingRef = (el: HTMLDivElement | null) => {
                dialogRef.current = el;
                refs.setFloating(el);
            };

            const handleSetOpen = (value: boolean) => {
                if (!isOpenControlled) {
                    setInnerOpen(value);
                }
                if (!value) {
                    onClose?.();
                    setInnerCurrent(0);
                    setHighlightRect(null);
                    setTargetElement(null);
                }
            };

            const handleSetCurrent = (index: number) => {
                if (!isCurrentControlled) {
                    setInnerCurrent(index);
                }
                onChange?.(index);
            };

            const handleClose = () => {
                handleSetOpen(false);
            };

            const updateHighlight = useCallback(() => {
                if (!isOpen || !currentStep) {
                    return;
                }

                const highlightElement = getHTMLElement(currentStep.target);

                if (!highlightElement) {
                    setHighlightRect(null);
                    setTargetElement(null);
                    return;
                }

                const rect = highlightElement.getBoundingClientRect();

                setHighlightRect(rect);
                setTargetElement(highlightElement);
            }, [isOpen, currentStep]);

            useEffect(() => {
                refs.setReference(targetElement);
            }, [refs, targetElement]);

            useEffect(() => {
                if (isOpen) {
                    if (targetElement) {
                        const rect = targetElement.getBoundingClientRect();
                        const isInViewport =
                            rect.top >= 0 &&
                            rect.left >= 0 &&
                            rect.bottom <= window.innerHeight &&
                            rect.right <= window.innerWidth;

                        if (!isInViewport) {
                            targetElement.scrollIntoView({
                                block: 'center',
                                inline: 'center',
                                behavior: 'smooth',
                            });
                        }
                    }

                    if (dialogRef.current) {
                        dialogRef.current.focus({ preventScroll: true });
                    }
                }
            }, [isOpen, targetElement]);

            useEffect(() => {
                if (!canUseDOM) {
                    return;
                }

                let portal = document.getElementById(portalId);
                if (!portal) {
                    portal = document.createElement('div');
                    portal.setAttribute('id', portalId);
                    document.body.appendChild(portal);
                }
                portalRef.current = portal;

                return () => {
                    portal?.remove();
                };
            }, []);

            useEffect(() => {
                if (!isOpen) {
                    return;
                }

                updateHighlight();

                window.addEventListener('resize', updateHighlight);
                window.addEventListener('scroll', updateHighlight, true);

                return () => {
                    window.removeEventListener('resize', updateHighlight);
                    window.removeEventListener('scroll', updateHighlight, true);
                };
            }, [isOpen, updateHighlight]);

            useEffect(() => {
                if (!isOpen) {
                    return;
                }

                const handleKeyDown = (e: KeyboardEvent) => {
                    if (e.key === 'Escape') {
                        handleClose();
                    }
                };

                window.addEventListener('keydown', handleKeyDown);

                return () => {
                    window.removeEventListener('keydown', handleKeyDown);
                };
            }, [isOpen, handleClose]);

            useEffect(() => {
                if (!isOpen) {
                    hasHighlightedRef.current = false;
                    setHighlightRect(null);
                }
            }, [isOpen]);

            if (!currentStep || !canUseDOM || !portalRef.current) {
                return null;
            }

            const arrowFill = tailColor || `var(${tokens.tailColor})`;

            const preparedHighlightBorderRadius =
                currentStep?.highlightBorderRadius ?? highlightBorderRadius ?? undefined;
            const preparedHighlightOffset = currentStep?.highlightOffset || highlightOffset;

            const highlightProps = highlightRect
                ? {
                      left: highlightRect.left - preparedHighlightOffset,
                      top: highlightRect.top - preparedHighlightOffset,
                      width: highlightRect.width + preparedHighlightOffset * 2,
                      height: highlightRect.height + preparedHighlightOffset * 2,
                      borderRadius: preparedHighlightBorderRadius,
                      highlightOffset: preparedHighlightOffset,
                  }
                : null;

            const highlightNode =
                highlightProps &&
                (renderHighlight ? (
                    renderHighlight(highlightProps)
                ) : (
                    <Highlight
                        withOverlay={withOverlay}
                        overlayColor={overlayColor}
                        borderRadius={preparedHighlightBorderRadius}
                        disableTransition={isFirstHighlight}
                        style={{
                            left: highlightProps.left,
                            top: highlightProps.top,
                            width: highlightProps.width,
                            height: highlightProps.height,
                        }}
                    />
                ));

            const tourContent = (
                <Root ref={outerRef} view={view} size={size} {...rest}>
                    {isOpen && Boolean(targetElement) && (
                        <>
                            <MaskContainer className={classes.mask} zIndex={zIndex}>
                                {withOverlay ? <Mask /> : null}
                                {highlightNode}
                            </MaskContainer>

                            <TourPortal
                                ref={setFloatingRef}
                                role="dialog"
                                aria-modal="true"
                                tabIndex={-1}
                                style={{
                                    ...floatingStyles,
                                    zIndex: Number(zIndex),
                                }}
                                data-placement={calculatedPlacement}
                            >
                                {renderStep(
                                    active,
                                    steps.length,
                                    active === steps.length - 1,
                                    steps[active],
                                    handleSetCurrent,
                                )}

                                {hasTail && (
                                    <FloatingArrow
                                        ref={arrowRef}
                                        context={context}
                                        width={ARROW_WIDTH}
                                        height={ARROW_HEIGHT}
                                        fill={arrowFill}
                                        d={ARROW_POLYGON}
                                    />
                                )}
                            </TourPortal>
                        </>
                    )}
                </Root>
            );

            return createPortal(tourContent, portalRef.current);
        },
    );

export const tourConfig = {
    name: 'Tour',
    tag: 'div',
    layout: tourRoot,
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
