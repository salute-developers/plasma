import '@testing-library/jest-dom/vitest';

// API браузера, которых нет в jsdom, а ядро вызывает при отрисовке (Popover, Tabs, TextArea, Range и др.).
// В iframe плагина они есть; заглушки нужны только тестам.
if (typeof window.matchMedia !== 'function') {
    window.matchMedia = (query: string) =>
        ({
            matches: false,
            media: query,
            onchange: null,
            addListener: () => undefined,
            removeListener: () => undefined,
            addEventListener: () => undefined,
            removeEventListener: () => undefined,
            dispatchEvent: () => false,
        } as MediaQueryList);
}

if (typeof window.ResizeObserver !== 'function') {
    class ResizeObserverStub {
        observe() {}

        unobserve() {}

        disconnect() {}
    }
    window.ResizeObserver = (ResizeObserverStub as unknown) as typeof ResizeObserver;
    globalThis.ResizeObserver = window.ResizeObserver;
}

if (typeof Element.prototype.scrollTo !== 'function') {
    Element.prototype.scrollTo = () => undefined;
}
