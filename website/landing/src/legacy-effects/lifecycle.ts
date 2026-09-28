type ListenerTarget = Window | Document;
type ListenerRecord = [ListenerTarget, string, any, boolean | AddEventListenerOptions | undefined];

export function createEffectScope() {
    let active = true;
    const listeners: ListenerRecord[] = [];
    const observers: Array<{ disconnect: () => void }> = [];
    const frames = new Set<number>();
    const timers = new Set<number>();
    const intervals = new Set<number>();

    const addEventListener = (type: string, callback: any, options?: boolean | AddEventListenerOptions) => {
        window.addEventListener(type, callback, options);
        listeners.push([window, type, callback, options]);
    };
    const removeEventListener = (type: string, callback: any, options?: boolean | EventListenerOptions) =>
        window.removeEventListener(type, callback, options);
    const trackDocumentListener = (type: string, callback: any, options?: boolean | AddEventListenerOptions) => {
        document.addEventListener(type, callback, options);
        listeners.push([document, type, callback, options]);
    };
    const untrackDocumentListener = (type: string, callback: any, options?: boolean | EventListenerOptions) =>
        document.removeEventListener(type, callback, options);
    const requestAnimationFrame = (callback: FrameRequestCallback) => {
        if (!active) return 0;
        const id = window.requestAnimationFrame((time) => {
            frames.delete(id);
            if (active) callback(time);
        });
        frames.add(id);
        return id;
    };
    const cancelAnimationFrame = (id: number) => {
        window.cancelAnimationFrame(id);
        frames.delete(id);
    };
    const setTimeout = (callback: any, delay: number, ...args: any[]) => {
        const id = window.setTimeout(() => {
            timers.delete(id);
            if (active) callback(...args);
        }, delay);
        timers.add(id);
        return id;
    };
    const clearTimeout = (id: number) => {
        window.clearTimeout(id);
        timers.delete(id);
    };
    const setInterval = (callback: any, delay: number, ...args: any[]) => {
        const id = window.setInterval(() => {
            if (active) callback(...args);
        }, delay);
        intervals.add(id);
        return id;
    };
    const clearInterval = (id: number) => {
        window.clearInterval(id);
        intervals.delete(id);
    };

    const NativeIntersectionObserver = window.IntersectionObserver;
    const IntersectionObserver = NativeIntersectionObserver
        ? class extends NativeIntersectionObserver {
              constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
                  super((...args) => {
                      if (active) callback(...args);
                  }, options);
                  observers.push(this);
              }
          }
        : undefined;
    const NativeResizeObserver = window.ResizeObserver;
    const ResizeObserver = NativeResizeObserver
        ? class extends NativeResizeObserver {
              constructor(callback: ResizeObserverCallback) {
                  super((...args) => {
                      if (active) callback(...args);
                  });
                  observers.push(this);
              }
          }
        : undefined;

    const destroy = () => {
        active = false;
        listeners.forEach(([target, type, callback, options]) => target.removeEventListener(type, callback, options));
        observers.forEach((observer) => observer.disconnect());
        frames.forEach((id) => window.cancelAnimationFrame(id));
        timers.forEach((id) => window.clearTimeout(id));
        intervals.forEach((id) => window.clearInterval(id));
    };

    return {
        addEventListener,
        removeEventListener,
        trackDocumentListener,
        untrackDocumentListener,
        requestAnimationFrame,
        cancelAnimationFrame,
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval,
        IntersectionObserver: IntersectionObserver as typeof window.IntersectionObserver,
        ResizeObserver: ResizeObserver as typeof window.ResizeObserver,
        destroy,
    };
}
