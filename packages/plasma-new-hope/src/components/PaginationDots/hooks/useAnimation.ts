import { useLayoutEffect, useRef, useState } from 'react';

import { DotSize, getVisualOffsets } from '../PaginationDots';

export const useAnimation = ({
    isVertical,
    onAnimationEnd,
    activeElementRef,
    animatedDotsWrapperRef,
    canScrollForward,
    canScrollBackward,
    dots,
    prevDots,
    innerViewIndex,
}: {
    dots: DotSize[];
    prevDots: DotSize[];
    innerViewIndex: number;
    canScrollForward: boolean;
    canScrollBackward: boolean;
    isVertical: boolean;
    onAnimationEnd: () => void;
    activeElementRef: React.RefObject<HTMLDivElement>;
    animatedDotsWrapperRef: React.RefObject<HTMLDivElement>;
}) => {
    const isAnimationRunningRef = useRef(false);
    const [skipAnimation, setSkipAnimation] = useState(true);
    const [hasForwardAnimation, setHasForwardAnimation] = useState(false);
    const [hasBackwardAnimation, setHasBackwardAnimation] = useState(false);

    const hasAnimation = hasForwardAnimation || hasBackwardAnimation;

    const handleAnimationEnd = () => {
        if (isAnimationRunningRef.current) {
            isAnimationRunningRef.current = false;
            onAnimationEnd();
        }

        setHasForwardAnimation(false);
        setHasBackwardAnimation(false);
    };

    useLayoutEffect(() => {
        const { current: animatedEl } = animatedDotsWrapperRef;

        if (!animatedEl || (!hasForwardAnimation && !hasBackwardAnimation)) {
            return;
        }

        const before = getVisualOffsets(prevDots, innerViewIndex);
        const after = getVisualOffsets(dots, innerViewIndex);
        const diff = before - after;

        const { offsetWidth: activeWidth, offsetHeight: activeHeight } = activeElementRef.current as HTMLDivElement;
        const { offsetWidth: width, offsetHeight: height } =
            ((hasBackwardAnimation
                ? activeElementRef.current?.previousSibling
                : activeElementRef.current?.nextSibling) as HTMLDivElement) || {};

        animatedEl.style.transition = 'none';

        if (hasForwardAnimation) {
            if (canScrollForward) {
                animatedEl.style.transform = isVertical ? `translateY(${height}px)` : `translateX(${width}px)`;
            } else {
                animatedEl.style.transform = isVertical
                    ? `translateY(${height - activeHeight}px)`
                    : `translateX(${width - activeWidth}px)`;
            }

            requestAnimationFrame(() => {
                animatedEl.style.transition = 'transform 0.3s linear';
                if (canScrollForward) {
                    animatedEl.style.transform = isVertical ? `translateY(${-diff}px)` : `translateX(${-diff}px)`;
                } else {
                    animatedEl.style.transform = isVertical
                        ? `translateY(-${activeHeight}px)`
                        : `translateX(-${activeWidth}px)`;
                }
                isAnimationRunningRef.current = true;
            });
        }

        if (hasBackwardAnimation) {
            if (canScrollBackward) {
                animatedEl.style.transform = isVertical ? `translateY(${-height}px)` : `translateX(${-width}px)`;
            } else {
                animatedEl.style.transform = isVertical
                    ? `translateY(${-height + activeHeight}px)`
                    : `translateX(${-width + activeWidth}px)`;
            }

            requestAnimationFrame(() => {
                if (animatedEl) {
                    animatedEl.style.transition = 'transform 0.3s linear';
                    if (canScrollBackward) {
                        animatedEl.style.transform = isVertical ? `translateY(${-diff}px)` : `translateX(${-diff}px)`;
                    } else {
                        animatedEl.style.transform = isVertical
                            ? `translateY(${activeHeight}px)`
                            : `translateX(${activeWidth}px)`;
                    }
                    isAnimationRunningRef.current = true;
                }
            });
        }
    }, [isVertical, innerViewIndex, hasForwardAnimation, hasBackwardAnimation]);

    return {
        skipAnimation,
        hasAnimation,
        hasBackwardAnimation,
        hasForwardAnimation,
        setSkipAnimation,
        setHasForwardAnimation,
        setHasBackwardAnimation,
        handleAnimationEnd,
    };
};
