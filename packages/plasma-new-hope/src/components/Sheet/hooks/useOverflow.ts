import { useEffect, useRef } from 'react';

import { SheetHookArgs } from '../Sheet.types';

export const useOverflow = ({ opened }: SheetHookArgs) => {
    const overflow = useRef<string>(document.body.style.overflowY);

    // linaria не поддерживает динамический global
    useEffect(() => {
        if (opened) {
            overflow.current = document.body.style.overflowY;
            document.body.style.overflowY = 'hidden';
            return;
        }

        document.body.style.overflowY = overflow.current;
    }, [opened]);
};
