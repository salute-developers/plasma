import type { HTMLAttributes } from 'react';

export type ModalFooterProps = {
    /**
     * Вид нижней части Modal.
     */
    view?: string;
} & HTMLAttributes<HTMLDivElement>;
