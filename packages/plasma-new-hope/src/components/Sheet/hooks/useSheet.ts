import { useEffect, useRef } from 'react';

import { SheetHookArgs } from '../Sheet.types';

export const useSheet = ({ isOpen }: SheetHookArgs) => {
    const overflow = useRef<string>(document.body.style.overflowY);

    // linaria не поддерживает динамический global
    useEffect(() => {
        if (isOpen) {
            overflow.current = document.body.style.overflowY;
            document.body.style.overflowY = 'hidden';
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflowY = overflow.current;
        }
    }, [isOpen, overflow.current]);
};
