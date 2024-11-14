import { useEffect, useRef, MutableRefObject } from 'react';

export const ROOT_FONT_SIZE = 16;

export const useAutoResize = <T extends HTMLTextAreaElement>(
    active: boolean,
    ref: MutableRefObject<T | null>,
    value?: string | ReadonlyArray<string> | number,
    minAuto?: number,
    maxAuto?: number,
    resize?: string,
) => {
    const previousHeight = useRef<number | undefined>();

    useEffect(() => {
        if (active && ref && ref.current) {
            // проверка на пользовательский resize (вручную)
            const height = ref.current.clientHeight / ROOT_FONT_SIZE;
            if (
                resize &&
                resize !== 'none' &&
                previousHeight.current !== undefined &&
                previousHeight.current !== height
            ) {
                return;
            }

            const style = getComputedStyle(ref.current);
            const lineHeight = parseInt(style.lineHeight, 10);
            const lineHeightInRem = lineHeight / ROOT_FONT_SIZE;

            const minAutoHeight = minAuto ? minAuto * lineHeightInRem : 0;
            ref.current.style.height = `${minAutoHeight}rem`;

            const lines = Math.floor(ref.current.scrollHeight / lineHeight);
            const newScrollHeight = lines * lineHeightInRem;

            const maxAutoHeight = maxAuto ? maxAuto * lineHeightInRem : newScrollHeight;

            const newHeight = Math.min(newScrollHeight, maxAutoHeight);

            ref.current.style.height = `${newHeight}rem`;
            previousHeight.current = newHeight;
        }
    }, [ref, resize, active, value, minAuto, maxAuto]);
};
