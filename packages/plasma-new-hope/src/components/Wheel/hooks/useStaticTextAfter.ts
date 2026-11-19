import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

import { useIsomorphicLayoutEffect } from '../../../hooks';
import { privateTokens, tokens } from '../Wheel.tokens';

export const useStaticTextAfter = (enabled: boolean) => {
    const valueRef = useRef<HTMLDivElement>(null);
    const textAfterRef = useRef<HTMLSpanElement>(null);
    const [widths, setWidths] = useState({ value: 0, textAfter: 0 });

    const measure = useCallback(() => {
        if (!enabled || !valueRef.current || !textAfterRef.current) {
            return;
        }

        const value = valueRef.current.getBoundingClientRect().width;
        const textAfter = textAfterRef.current.getBoundingClientRect().width;
        setWidths((previous) =>
            previous.value === value && previous.textAfter === textAfter ? previous : { value, textAfter },
        );
    }, [enabled]);

    useIsomorphicLayoutEffect(measure);

    useEffect(() => {
        if (!enabled || !valueRef.current || !textAfterRef.current || typeof ResizeObserver === 'undefined') {
            return;
        }

        let frame: number;
        const observer = new ResizeObserver(() => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(measure);
        });
        observer.observe(valueRef.current);
        observer.observe(textAfterRef.current);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [enabled, measure]);

    const style = enabled
        ? ({
              [privateTokens.staticValueWidth]: `${widths.value}px`,
              [privateTokens.staticTextAfterPadding]: `calc(${widths.textAfter}px + var(${tokens.textAfterGap}))`,
          } as CSSProperties)
        : undefined;

    return { valueRef, textAfterRef, style };
};
