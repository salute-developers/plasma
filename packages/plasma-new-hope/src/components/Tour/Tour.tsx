// Tour.tsx
import React, { forwardRef, useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react-dom';

import { RootProps } from '../../engines';
import { cx, canUseDOM } from '../../utils';

import { getHTMLElement } from './utils';
import type { TourProps } from './Tour.types';
import { Mask, Highlight, TourPortal } from './Tour.styles';
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
                onChange,
                onClose,
                withMask = true,
                maskColor,
                zIndex = 9300,
                view,
                size,
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

            const total = steps.length;
            const last = active >= total - 1;
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
                    offset(12),
                    flip({
                        fallbackPlacements: Array.isArray(currentStep?.placement) ? currentStep.placement : undefined,
                    }),
                    shift({ padding: 12 }),
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

            const setCurrent = useCallback(
                (val: number) => {
                    if (!controlled) {
                        setInnerCurrent(val);
                    }
                    onChange?.(val);
                },
                [controlled, onChange],
            );

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

            const handlePrev = () => setCurrent(Math.max(0, active - 1));
            const handleNext = () => {
                if (last) {
                    setOpen(false);
                } else {
                    setCurrent(active + 1);
                }
            };
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
                if (!canUseDOM) return;

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
                    return () => window.removeEventListener('keydown', handleKeyDown);
                }
            }, [isOpen]);

            if (!currentStep || !canUseDOM || !portalRef.current) return null;

            const tourContent = (
                <Root steps={[]} ref={outerRef} className={cx(className)} view={view} size={size} {...rest}>
                    {isOpen && withMask && (
                        <div className={classes.mask} style={{ zIndex: Number(zIndex) - 100 }} data-plasma-tour-mask>
                            <Mask />
                            {highlightRect && (
                                <Highlight
                                    maskColor={maskColor}
                                    style={{
                                        left: highlightRect.left - 4,
                                        top: highlightRect.top - 4,
                                        width: highlightRect.width + 8,
                                        height: highlightRect.height + 8,
                                    }}
                                />
                            )}
                        </div>
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
