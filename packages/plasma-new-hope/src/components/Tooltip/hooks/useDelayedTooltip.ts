import { useState, useRef, useEffect } from 'react';

export const useDelayedTooltip = (openDelay: number, closeDelay: number) => {
    const [opened, setOpened] = useState(false);

    const openTimeoutRef = useRef<number | null>(null);
    const closeTimeoutRef = useRef<number | null>(null);

    const clearTimeouts = () => {
        if (openTimeoutRef.current) {
            clearTimeout(openTimeoutRef.current);
            openTimeoutRef.current = null;
        }

        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const showTooltip = () => {
        clearTimeouts();

        openTimeoutRef.current = setTimeout(() => {
            setOpened(true);
        }, openDelay);
    };

    const hideTooltip = () => {
        clearTimeouts();

        closeTimeoutRef.current = setTimeout(() => {
            setOpened(false);
        }, closeDelay);
    };

    useEffect(() => {
        return clearTimeouts;
    }, []);

    return {
        opened,
        setOpened,
        showTooltip,
        hideTooltip,
    };
};
