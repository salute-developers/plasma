import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

import type { BottomSheetSnapPoint, BottomSheetSnapPoints } from '../BottomSheet.types';
import { applyActiveSnapHeight } from '../utils';

import { useBottomSheetDrag } from './useBottomSheetDrag';

export const useBottomSheet = (args: {
    opened: boolean;
    content: ReactNode;
    onClose: () => void;
    hasHandle?: boolean;
    snapPoints?: BottomSheetSnapPoints;
    initialSnapPoint?: BottomSheetSnapPoint;
    onSnapPointChange?: (snapPoint: BottomSheetSnapPoint) => void;
}) => {
    const { opened, content, onClose, hasHandle, snapPoints, initialSnapPoint, onSnapPointChange } = args;

    const panelRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const wasOpenedRef = useRef(Boolean(opened));

    const [overflows, setOverflows] = useState(false);
    const [headerDivider, setHeaderDivider] = useState(false);
    const [footerDivider, setFooterDivider] = useState(false);

    const syncOverflow = () => {
        const body = bodyRef.current;

        if (!body) {
            return;
        }

        setOverflows(body.scrollHeight > body.clientHeight + 1);
        setHeaderDivider(body.scrollTop > 0);
        setFooterDivider(body.scrollHeight - body.scrollTop - body.clientHeight > 1);
    };

    // Блокировка скролла страницы
    useEffect(() => {
        if (!opened) {
            return undefined;
        }

        const { body } = document;
        const { scrollY } = window;
        const prev = {
            position: body.style.position,
            top: body.style.top,
            left: body.style.left,
            right: body.style.right,
            width: body.style.width,
            overflow: body.style.overflow,
        };

        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
        body.style.left = '0';
        body.style.right = '0';
        body.style.width = '100%';
        body.style.overflow = 'hidden';

        return () => {
            body.style.position = prev.position;
            body.style.top = prev.top;
            body.style.left = prev.left;
            body.style.right = prev.right;
            body.style.width = prev.width;
            body.style.overflow = prev.overflow;
            window.scrollTo(0, scrollY);
        };
    }, [opened]);

    const { activeSnapPointRef, snapPointsRef, initialSnapPointRef } = useBottomSheetDrag({
        panelRef,
        handleRef,
        bodyRef,
        enabled: hasHandle !== false,
        onClose,
        snapPoints,
        initialSnapPoint,
        onSnapPointChange,
        onSnapSettled: syncOverflow,
    });

    // Высота по активной snap-точке. При повторном открытии сброс на initialSnapPoint.
    useLayoutEffect(() => {
        const panel = panelRef.current;
        const points = snapPointsRef.current;
        const justOpened = opened && !wasOpenedRef.current;

        wasOpenedRef.current = Boolean(opened);

        if (!panel) {
            return undefined;
        }

        if (!opened) {
            const resetToInitialHeight = () => {
                const nextPoints = snapPointsRef.current;

                if (!nextPoints?.length) {
                    panel.style.height = '';
                    return;
                }

                activeSnapPointRef.current = applyActiveSnapHeight(panel, nextPoints, initialSnapPointRef.current);
            };

            if (parseFloat(getComputedStyle(panel).transitionDuration) === 0) {
                resetToInitialHeight();
                return undefined;
            }

            const onTransitionEnd = (event: TransitionEvent) => {
                if (event.target !== panel || event.propertyName !== 'transform') {
                    return;
                }

                resetToInitialHeight();
            };

            panel.addEventListener('transitionend', onTransitionEnd);

            return () => {
                panel.removeEventListener('transitionend', onTransitionEnd);
            };
        }

        if (!points?.length) {
            panel.style.height = '';
            return;
        }

        const preferred = justOpened ? initialSnapPointRef.current : activeSnapPointRef.current;

        activeSnapPointRef.current = applyActiveSnapHeight(panel, points, preferred);

        return undefined;
    }, [opened]);

    // Overflow и разделители body.
    useLayoutEffect(() => {
        const body = bodyRef.current;

        if (body) {
            body.scrollTop = 0;
        }

        if (!opened) {
            setHeaderDivider(false);
            setFooterDivider(false);
            setOverflows(false);
            return;
        }

        if (!body) {
            return;
        }

        syncOverflow();
        body.addEventListener('scroll', syncOverflow);

        return () => body.removeEventListener('scroll', syncOverflow);
    }, [opened, content]);

    return {
        panelRef,
        bodyRef,
        handleRef,
        overflows,
        headerDivider,
        footerDivider,
    };
};
