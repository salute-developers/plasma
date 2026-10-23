import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const metrikaCounterId = 113706451;

declare global {
    interface Window {
        ym?: (counterId: number, method: string, ...args: unknown[]) => void;
    }
}

// Первый просмотр отправляет сам счётчик при init, здесь — переходы внутри SPA.
export function MetrikaHits() {
    const { pathname, search } = useLocation();
    const previousUrl = useRef<string>();

    useEffect(() => {
        // useLocation отдаёт путь без basename, поэтому полный адрес берём из window.location
        const url = window.location.origin + window.location.pathname + window.location.search;
        const referer = previousUrl.current;
        previousUrl.current = url;

        if (!referer) return;

        // компонент стоит после Routes, document.title страницы к этому моменту уже обновлён
        window.ym?.(metrikaCounterId, 'hit', url, { title: document.title, referer });
    }, [pathname, search]);

    return null;
}
