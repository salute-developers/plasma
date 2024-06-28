import type { ReactNode } from 'react';

export type PortalProps = {
    /**
     * Элемент, в который добавится содержимое портала.
     */
    container: HTMLElement | (() => HTMLElement);
    /**
     * Содержимое портала.
     */
    children?: ReactNode;
    /**
     * Отключение портала.
     * Если портал выключен, то его содержимое добавится внутрь родительского элемента.
     * @default false
     */
    disabled?: boolean;
};
