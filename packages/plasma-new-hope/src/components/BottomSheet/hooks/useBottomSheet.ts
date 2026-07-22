import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useBottomSheetDrag } from './useBottomSheetDrag';

export const useBottomSheet = (args: {
    opened: boolean;
    content: ReactNode;
    onClose: () => void;
    hasHandle?: boolean;
}) => {
    const { opened, content, onClose, hasHandle } = args;

    const panelRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);

    const [overflows, setOverflows] = useState(false);
    const [headerDivider, setHeaderDivider] = useState(false);
    const [footerDivider, setFooterDivider] = useState(false);

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

    // Overflow и разделители body.
    useLayoutEffect(() => {
        const panel = panelRef.current;
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

        if (!panel || !body) {
            return;
        }

        const maxPx = parseFloat(getComputedStyle(panel).maxHeight);
        const isOverflow = Number.isFinite(maxPx) && maxPx > 0 && panel.scrollHeight > maxPx;

        const update = () => {
            setHeaderDivider(body.scrollTop > 0);
            setFooterDivider(body.scrollHeight - body.scrollTop - body.clientHeight > 1);
        };

        setOverflows(isOverflow);
        update();
        body.addEventListener('scroll', update);

        return () => body.removeEventListener('scroll', update);
    }, [opened, content]);

    useBottomSheetDrag({
        panelRef,
        handleRef,
        enabled: hasHandle !== false,
        onClose,
    });

    return {
        panelRef,
        bodyRef,
        handleRef,
        overflows,
        headerDivider,
        footerDivider,
    };
};
