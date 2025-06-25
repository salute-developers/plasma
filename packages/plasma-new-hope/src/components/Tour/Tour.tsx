import React, { forwardRef, useEffect, useState, useRef, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { useFloating, offset, flip, shift, autoUpdate, Placement } from '@floating-ui/react-dom';

import { RootProps } from '../../engines';
import { canUseDOM } from '../../utils';

import { getHTMLElement, getIncreasedRadius, findRootElement } from './utils';
import type { TourProps } from './Tour.types';
import { MaskContainer, Mask, Highlight, TourPortal } from './Tour.styles';
import { base as viewCSS } from './variatoins/_view/base';
import { base as sizeCSS } from './variatoins/_size/base';
import { classes } from './Tour.tokens';

export const tourRoot = (Root: RootProps<HTMLDivElement, TourProps>) =>
    forwardRef<HTMLDivElement, TourProps>(
        (
            {
                steps,
                current,
                defaultCurrent = 0,
                open,
                defaultOpen = false,
                onClose,
                withOverlay = true,
                overlayColor,
                zIndex = 9000,
                view,
                size,
                offset: offsetProp = [12, 12],
                highlightOffset = 4,
                renderStep,
                ...rest
            },
            outerRef,
        ) => {
            const TOUR_PORTAL_ID = `plasma-tour-portal-${Date.now()}`;
            const isCurrentControlled = typeof current === 'number';
            const isOpenControlled = typeof open === 'boolean';

            const [innerCurrent, setInnerCurrent] = useState(defaultCurrent);
            const [innerOpen, setInnerOpen] = useState(defaultOpen);
            const [highlightRect, setHighlightRect] = useState<DOMRect | null>(null);
            const [highlightBorderRadius, setHighlightBorderRadius] = useState<
                string | CSSProperties['borderRadius'] | null
            >(null);
            const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

            const portalRef = useRef<HTMLElement | null>(null);

            const active = isCurrentControlled ? (current as number) : innerCurrent;
            const isOpen = isOpenControlled ? (open as boolean) : innerOpen;

            const currentStep = steps[active];

            const rawPlacement = currentStep?.placement;
            const placement: Placement = (Array.isArray(rawPlacement) ? rawPlacement[0] : rawPlacement) || 'bottom';

            const middleware = [
                offset(offsetProp[0]),
                flip({
                    fallbackPlacements: Array.isArray(currentStep?.placement) ? currentStep.placement : undefined,
                }),
                shift({ padding: offsetProp[1] }),
            ];

            const { refs, floatingStyles, placement: calculatedPlacement } = useFloating({
                placement,
                middleware,
                whileElementsMounted: autoUpdate,
            });

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

            const handleClose = () => {
                handleSetOpen(false);
            };

            const updateHighlight = () => {
                if (!isOpen || !currentStep) {
                    return;
                }

                const rootItem = findRootElement(currentStep.target as any) as any;
                const highlightElement = getHTMLElement(rootItem);

                if (highlightElement) {
                    const rect = highlightElement.getBoundingClientRect();
                    setHighlightRect(rect);
                    setTargetElement(highlightElement);

                    const borderRadius =
                        currentStep.borderRadius === 'auto' ||
                        currentStep.borderRadius === undefined ||
                        currentStep.borderRadius === null
                            ? getIncreasedRadius(rootItem, highlightOffset)
                            : currentStep?.borderRadius ?? '0px';
                    setHighlightBorderRadius(borderRadius);
                } else {
                    setHighlightRect(null);
                    setTargetElement(null);
                }
            };

            useEffect(() => {
                refs.setReference(targetElement);
            }, [refs, targetElement]);

            useEffect(() => {
                if (!canUseDOM) {
                    return;
                }

                let portal = document.getElementById(TOUR_PORTAL_ID);
                if (!portal) {
                    portal = document.createElement('div');
                    portal.setAttribute('id', TOUR_PORTAL_ID);
                    document.body.appendChild(portal);
                }
                portalRef.current = portal;

                return () => {
                    if (portal) {
                        portal.remove();
                    }
                };
            }, []);

            useEffect(() => {
                updateHighlight();

                window.addEventListener('resize', updateHighlight);
                window.addEventListener('scroll', updateHighlight, true);

                return () => {
                    window.removeEventListener('resize', updateHighlight);
                    window.removeEventListener('scroll', updateHighlight, true);
                };
            }, [currentStep]);

            useEffect(() => {
                if (isOpen && targetElement) {
                    targetElement.scrollIntoView({
                        block: 'center',
                        inline: 'center',
                        behavior: 'smooth',
                    });
                }
            }, [isOpen, active, targetElement]);

            useEffect(() => {
                const handleKeyDown = (e: KeyboardEvent) => {
                    if (e.key === 'Escape') {
                        handleClose();
                    }
                };

                if (isOpen) {
                    window.addEventListener('keydown', handleKeyDown);
                }

                return () => {
                    window.removeEventListener('keydown', handleKeyDown);
                };
            }, [isOpen, handleClose]);

            if (!currentStep || !canUseDOM || !portalRef.current) {
                return null;
            }

            const tourContent = (
                <Root renderStep={renderStep} steps={steps} ref={outerRef} view={view} size={size} {...rest}>
                    {isOpen && withOverlay && (
                        <MaskContainer className={classes.mask} zIndex={zIndex}>
                            <Mask />

                            {Boolean(highlightRect) && (
                                <Highlight
                                    overlayColor={overlayColor}
                                    borderRadius={highlightBorderRadius}
                                    style={{
                                        left: (highlightRect?.left ?? 0) - highlightOffset,
                                        top: (highlightRect?.top ?? 0) - highlightOffset,
                                        width: (highlightRect?.width ?? 0) + highlightOffset * 2,
                                        height: (highlightRect?.height ?? 0) + highlightOffset * 2,
                                    }}
                                />
                            )}
                        </MaskContainer>
                    )}

                    {isOpen && Boolean(targetElement) && (
                        <TourPortal
                            ref={refs.setFloating}
                            style={{
                                ...floatingStyles,
                                zIndex: Number(zIndex),
                            }}
                            data-placement={calculatedPlacement}
                        >
                            {renderStep && renderStep(active, steps.length, active === steps.length - 1, steps[active])}
                        </TourPortal>
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
