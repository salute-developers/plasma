import type { HTMLAttributes, ReactNode, RefObject } from 'react';

export interface ContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    /**
     * Верхняя часть чата
     */
    header?: ReactNode;
    /**
     * Контент чата
     */
    content?: ReactNode;
    /**
     * Ссылка на контент чата
     */
    contentRef?: RefObject<HTMLDivElement>;
    /**
     * Нижняя часть чата
     */
    footer?: ReactNode;
    /**
     * Подпись к нижней части чата
     */
    footerCaption?: ReactNode;
    /**
     * Выравнивание подписи к нижней части чата
     */
    footerCaptionAlign?: 'center' | 'start';
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
}

export interface ContainerRootProps
    extends Pick<ContainerProps, 'view' | 'size'>,
        Omit<HTMLAttributes<HTMLDivElement>, 'size'> {}
