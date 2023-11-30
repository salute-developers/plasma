import { useEffect, useRef, MutableRefObject } from 'react';

export const ROOT_FONT_SIZE = 16;

export const useAutoResize = <T extends HTMLTextAreaElement>(
    active: boolean,
    ref: MutableRefObject<T | null>,
    value?: string | ReadonlyArray<string> | number,
    minHeight?: number,
    maxHeight?: number,
) => {
    const isManualResize = useRef<boolean>(false);
    const previousHeight = useRef<number | undefined>();

    useEffect(() => {
        if (active && ref && ref.current && !isManualResize.current) {
            // проверка на пользовательский resize (вручную)
            const height = ref.current.clientHeight / ROOT_FONT_SIZE;
            if (previousHeight.current !== undefined && previousHeight.current !== height) {
                isManualResize.current = true;
                return;
            }

            ref.current.style.height = `${minHeight ? minHeight + 1 : '0'}rem`;
            const scrollHeight = ref.current.scrollHeight / ROOT_FONT_SIZE;
            const newHeight = Math.min(scrollHeight, maxHeight ? maxHeight + 1 : scrollHeight);

            ref.current.style.height = `${newHeight}rem`;
            previousHeight.current = newHeight;
        }
    }, [ref, active, value]);
};
