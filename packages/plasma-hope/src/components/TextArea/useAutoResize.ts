import { useEffect, useRef } from 'react';

const ROOT_FONT_SIZE = 16;

export const useAutoResize = <T extends HTMLTextAreaElement>(
    active: boolean,
    ref: React.MutableRefObject<T | null>,
    value?: string | ReadonlyArray<string> | number,
    minHeight?: number,
    maxHeight?: number,
) => {
    const isManualResize = useRef<boolean>(false);
    const previuosHeight = useRef<number | undefined>();

    useEffect(() => {
        if (active && ref && ref.current && !isManualResize.current) {
            // проверка на пользовательский resize (вручную)
            const height = ref.current.clientHeight / ROOT_FONT_SIZE;
            if (previuosHeight.current !== undefined && previuosHeight.current !== height) {
                isManualResize.current = true;
                return;
            }

            ref.current.style.height = `${minHeight || '0'}rem`;
            const scrollHeight = ref.current.scrollHeight / ROOT_FONT_SIZE;
            const newHeight = Math.min(scrollHeight, maxHeight || scrollHeight);
            ref.current.style.height = `${newHeight}rem`;
            previuosHeight.current = newHeight;
        }
    }, [ref, active, value]);
};
