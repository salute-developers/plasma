import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode, FC } from 'react';

import { useIsomorphicLayoutEffect } from '../../hooks';

// Полиморфная версия портала для рендера как на сервере, так и на клиенте.
// Позволяет избежать ошибок, связанных с гидрацией.
const ClientOnlyPortal: FC<{ children: ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLElement | null>(null);

    const [mounted, setMounted] = useState(false);

    useIsomorphicLayoutEffect(() => {
        ref.current = document.body;

        setMounted(true);
    }, []);

    return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export { ClientOnlyPortal };
