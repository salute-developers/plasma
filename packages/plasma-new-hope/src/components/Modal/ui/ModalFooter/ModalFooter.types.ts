import type { HTMLAttributes, ReactNode } from 'react';

export type ModalFooterProps = {
    /**
     * Вид нижней части Modal.
     */
    view?: string;
    /**
     * Подпись под содержимым футера.
     */
    text?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
