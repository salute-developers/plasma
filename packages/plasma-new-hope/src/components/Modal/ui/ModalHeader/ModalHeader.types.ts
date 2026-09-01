import type { HTMLAttributes } from 'react';

export type ModalHeaderProps = {
    /**
     * Вид верхней части Modal.
     */
    view?: string;
    /**
     * Позиционирует шапку поверх контента (например, над ModalImage).
     */
    absolute?: boolean;
} & HTMLAttributes<HTMLDivElement>;
