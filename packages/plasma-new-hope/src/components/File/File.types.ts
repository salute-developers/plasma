import type { HTMLAttributes, ReactNode } from 'react';

export type LoaderType = 'circular' | 'linear';
export type ActionPlacement = 'left' | 'right';

export type BaseFileProps = {
    /**
     * Название файла
     */
    label: string;
    /**
     * Размер файла в байтах или любая другая строка
     */
    description?: number | string;
    /**
     * Размещение контента ( кнопка действия и loader ) относительно текста
     * @default 'right'
     */
    actionPlacement?: ActionPlacement;
    /**
     * Контент слева (иконка файла)
     * thumbIcon и thumbUrl не могут быть использованы одновременно
     */
    thumbIcon?: ReactNode;
    /**
     * Контент слева (URL изображения)
     * thumbIcon и thumbUrl не могут быть использованы одновременно
     */
    thumbUrl?: string;
    /**
     * Контент справа
     * Виден только если isLoading = false
     */
    actionContent?: ReactNode;
    /**
     * Состояние загрузки
     * @default false
     */
    isLoading?: boolean;
    /**
     * Тип загрузчика
     * @default 'circular'
     */
    loaderType?: LoaderType;
    /**
     * Слот для компонента загрузки. В зависимости от loaderType слот находиться в разных местах:
     * - 'circular' - справа вместо contentRight
     * - 'linear' - в низу компонента
     * @default ProgressBarCircular
     */
    loader?: ReactNode;
    /**
     * Значение загрузчика
     * @default 0
     */
    loaderValue?: number;
    /**
     * Максимальное значение загрузчика
     * @default 100
     */
    loaderMaxValue?: number;
    /**
     * Вид файла
     * @default 'default'
     */
    view?: string;
    /**
     * Размер файла
     * @default 'm'
     */
    size?: string;
    /**
     * Файл неактивен
     * @default false
     */
    disabled?: boolean;
};

export type FileProps = HTMLAttributes<HTMLDivElement> & BaseFileProps;
