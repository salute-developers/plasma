import type { HTMLAttributes } from 'react';

export type ModalImageProps = {
    /**
     * Вид слота изображения Modal.
     */
    view?: string;
} & HTMLAttributes<HTMLDivElement>;
