// Tour.tsx
import React, { forwardRef, useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react-dom';

import { RootProps } from '../../engines';
import { canUseDOM } from '../../utils';

import { getHTMLElement } from './utils';
import type { TourProps } from './Tour.types';
import { MaskContainer, Mask, Highlight, TourPortal } from './Tour.styles';
import { base as viewCSS } from './variatoins/_view/base';
import { base as sizeCSS } from './variatoins/_size/base';
import { classes } from './Tour.tokens';

const TOUR_PORTAL_ID = 'plasma-tour-portal';

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
                zIndex = 9300,
                view,
                size,
                shift: shiftProp = 12,
                offset: offsetProp = 12,
                highlightOffset = 4,
                className,
                ...rest
            },
            outerRef,
        ) => {
            const controlled = typeof current === 'number';
            const controlledOpen = typeof open === 'boolean';

            const [innerCurrent, setInnerCurrent] = useState(defaultCurrent);
            const [innerOpen, setInnerOpen] = useState(defaultOpen);
            const [highlightRect, setHighlightRect] = useState<DOMRect | null>(null);
            const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

            const portalRef = useRef<HTMLElement | null>(null);
            const floatingRef = useRef<HTMLDivElement | null>(null);

            const active = controlled ? (current as number) : innerCurrent;
            const isOpen = controlledOpen ? (open as boolean) : innerOpen;

            const currentStep = steps[active];

            const placement = useMemo(() => {
                if (!currentStep) return 'bottom';

                if (Array.isArray(currentStep.placement)) {
                    return currentStep.placement[0] || 'bottom';
                }

                return currentStep.placement || 'bottom';
            }, [currentStep]);

            const middleware = useMemo(
                () => [
                    offset(offsetProp),
                    flip({
                        fallbackPlacements: Array.isArray(currentStep?.placement) ? currentStep.placement : undefined,
                    }),
                    shift({ padding: shiftProp }),
                ],
                [currentStep?.placement],
            );

            const { refs, floatingStyles, placement: calculatedPlacement } = useFloating({
                placement,
                middleware,
                whileElementsMounted: autoUpdate,
            });

            useEffect(() => {
                refs.setReference(targetElement);
            }, [refs, targetElement]);

            const setOpen = useCallback(
                (val: boolean) => {
                    if (!controlledOpen) {
                        setInnerOpen(val);
                    }
                    if (!val) {
                        onClose?.();
                        setInnerCurrent(0);
                        setHighlightRect(null);
                        setTargetElement(null);
                    }
                },
                [controlledOpen, onClose],
            );

            const handleClose = () => setOpen(false);

            const updateHighlight = useCallback(() => {
                if (!isOpen || !currentStep) return;

                const element = getHTMLElement(currentStep.target as any);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    setHighlightRect(rect);
                    setTargetElement(element);
                } else {
                    setHighlightRect(null);
                    setTargetElement(null);
                }
            }, [isOpen, currentStep]);

            useEffect(() => {
                if (!canUseDOM) return; // No setup needed

                let portal = document.getElementById(TOUR_PORTAL_ID);

                if (!portal) {
                    portal = document.createElement('div');
                    portal.setAttribute('id', TOUR_PORTAL_ID);
                    document.body.appendChild(portal);
                }

                portalRef.current = portal;

                return () => {
                    if (portal && portal.childNodes.length === 0) {
                        portal.remove();
                    }
                };
            }, []);

            useEffect(() => {
                updateHighlight();

                const handleUpdate = () => {
                    updateHighlight();
                };

                window.addEventListener('resize', handleUpdate);
                window.addEventListener('scroll', handleUpdate, true);

                return () => {
                    window.removeEventListener('resize', handleUpdate);
                    window.removeEventListener('scroll', handleUpdate, true);
                };
            }, [updateHighlight]);

            useEffect(() => {
                if (!isOpen || !currentStep || !targetElement) return;

                targetElement.scrollIntoView({
                    block: 'center',
                    inline: 'center',
                    behavior: 'smooth',
                });
            }, [isOpen, active, currentStep, targetElement]);

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
            }, [isOpen]);

            if (!currentStep || !canUseDOM || !portalRef.current) return null;

            const tourContent = (
                <Root steps={steps} ref={outerRef} className={className} view={view} size={size} {...rest}>
                    {isOpen && withOverlay && (
                        <MaskContainer className={classes.mask} zIndex={zIndex} data-plasma-tour-mask>
                            <Mask />
                            {highlightRect && (
                                <Highlight
                                    overlayColor={overlayColor}
                                    style={{
                                        left: highlightRect.left - highlightOffset,
                                        top: highlightRect.top - highlightOffset,
                                        width: highlightRect.width + highlightOffset * 2,
                                        height: highlightRect.height + highlightOffset * 2,
                                    }}
                                />
                            )}
                        </MaskContainer>
                    )}

                    {isOpen && targetElement && (
                        <TourPortal
                            ref={(node) => {
                                refs.setFloating(node);
                                floatingRef.current = node;
                            }}
                            style={{
                                ...floatingStyles,
                                zIndex: Number(zIndex),
                            }}
                            data-placement={calculatedPlacement}
                        >
                            {currentStep.renderItem()}
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
