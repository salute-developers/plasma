import { useEffect } from 'react';

import { SheetHookArgs } from '../Sheet.types';

export const useOverflow = ({ opened }: SheetHookArgs) => {
    // INFO: Linaria не поддерживает динамический global
    useEffect(() => {
        if (!opened) {
            return;
        }

        const prev = document.body.style.overflowY;

        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = prev;
        };
    }, [opened]);
};
