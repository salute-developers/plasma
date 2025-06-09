import { useEffect, useRef } from 'react';
import { canUseDOM } from 'src/utils';

import { SheetHookArgs } from '../Sheet.types';

export const useOverflow = ({ opened }: SheetHookArgs) => {
    const overflow = useRef<string>(canUseDOM ? document.body.style.overflowY : 'initial');

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
