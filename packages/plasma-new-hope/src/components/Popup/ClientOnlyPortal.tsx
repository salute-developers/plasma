import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode, FC } from 'react';

import { useIsomorphicLayoutEffect } from '../../hooks';

// Полиморфная версия портала для рендера как на сервере, так и на клиенте.
// Позволяет избежать ошибок, связанных с гидрацией.
const ClientOnlyPortal: FC<{
    children: ReactNode;
    providerFrame?: 'document' | string | React.RefObject<HTMLElement>;
}> = ({ children, providerFrame }) => {
    const ref = useRef<HTMLElement | null>(null);

    const [mounted, setMounted] = useState(false);

    useIsomorphicLayoutEffect(() => {
        setMounted(true);

        if (typeof providerFrame !== 'string' && providerFrame && providerFrame.current) {
            ref.current = providerFrame.current;

            return;
        }

        if (typeof providerFrame === 'string' && providerFrame !== 'document') {
            const containerElement = document.getElementById(providerFrame as string);

            if (!containerElement) {
                ref.current = document.body;
            }

            ref.current = containerElement;

            return;
        }

        ref.current = document.body;
    }, []);

    return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export { ClientOnlyPortal };
