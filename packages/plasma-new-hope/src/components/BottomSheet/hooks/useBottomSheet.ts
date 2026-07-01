import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useBottomSheetDrag, SheetHeightState } from './useBottomSheetDrag';

const MAX_HEIGHT_FALLBACK_RATIO = 0.9;

export const useBottomSheet = (args: {
    opened: boolean;
    content: ReactNode;
    onClose: () => void;
    hasHandle?: boolean;
}) => {
    const { opened, content, onClose, hasHandle } = args;

    const panelRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    const [overflows, setOverflows] = useState(false);
    const [heightState, setHeightState] = useState<SheetHeightState>('auto');
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

    // Поднимаем панель над клавиатурой мобилок
    useEffect(() => {
        const vv = window.visualViewport;

        if (!opened || !vv) {
            return undefined;
        }

        const update = () => {
            const panel = panelRef.current;

            if (!panel) {
                return;
            }

            const keyboard = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
            panel.style.bottom = keyboard ? `${keyboard}px` : '';
        };

        update();
        vv.addEventListener('resize', update);
        vv.addEventListener('scroll', update);

        return () => {
            vv.removeEventListener('resize', update);
            vv.removeEventListener('scroll', update);

            if (panelRef.current) {
                panelRef.current.style.bottom = '';
            }
        };
    }, [opened]);

    // Стартовая высота: свёрнуто, если контент не влезает
    useLayoutEffect(() => {
        const panel = panelRef.current;

        if (panel) {
            panel.style.height = '';
        }

        if (!opened) {
            setHeaderDivider(false);
            setFooterDivider(false);
            return;
        }

        const el = contentRef.current;

        if (!el || !panel) {
            return;
        }

        const computed = getComputedStyle(panel);
        const maxPx = parseFloat(computed.maxHeight);
        const ceiling = Number.isFinite(maxPx) && maxPx > 0 ? maxPx : window.innerHeight * MAX_HEIGHT_FALLBACK_RATIO;
        const footerHeight = footerRef.current?.offsetHeight ?? 0;
        const verticalPadding = parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom);
        const isOverflow = el.scrollHeight + footerHeight + verticalPadding > ceiling;

        setOverflows(isOverflow);
        setHeightState(isOverflow ? 'collapsed' : 'auto');
    }, [opened]);

    // Разделители при прокрутке
    useEffect(() => {
        const el = contentRef.current;

        if (!el || !opened) {
            return undefined;
        }

        const update = () => {
            setHeaderDivider(el.scrollTop > 0);
            setFooterDivider(el.scrollHeight - el.scrollTop - el.clientHeight > 1);
        };

        update();
        el.addEventListener('scroll', update);

        return () => el.removeEventListener('scroll', update);
    }, [opened, heightState, overflows, content]);

    const handleSettle = useCallback((state: SheetHeightState) => setHeightState(state), []);

    const draggable = overflows || hasHandle === true;

    useBottomSheetDrag({
        panelRef,
        handleRef,
        enabled: draggable,
        overflows,
        onSettle: handleSettle,
        onClose,
    });

    return {
        panelRef,
        contentRef,
        handleRef,
        footerRef,
        draggable,
        heightState,
        headerDivider,
        footerDivider,
    };
};
