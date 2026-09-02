import { useState, useRef, useEffect, useCallback } from 'react';

export const useDelayedTooltip = (openDelay: number, closeDelay: number) => {
    const [opened, setOpened] = useState(false);

    const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimeouts = useCallback(() => {
        if (openTimeoutRef.current) {
            clearTimeout(openTimeoutRef.current);
            openTimeoutRef.current = null;
        }

        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    }, []);

    const showTooltip = useCallback(() => {
        clearTimeouts();

        openTimeoutRef.current = setTimeout(() => {
            setOpened(true);
        }, openDelay);
    }, [clearTimeouts, openDelay]);

    const hideTooltip = useCallback(() => {
        clearTimeouts();

        closeTimeoutRef.current = setTimeout(() => {
            setOpened(false);
        }, closeDelay);
    }, [clearTimeouts, closeDelay]);

    const resetTooltip = useCallback(() => {
        clearTimeouts();
        setOpened(false);
    }, [clearTimeouts]);

    useEffect(() => {
        return clearTimeouts;
    }, [clearTimeouts]);

    return {
        opened,
        setOpened,
        showTooltip,
        hideTooltip,
        resetTooltip,
    };
};
