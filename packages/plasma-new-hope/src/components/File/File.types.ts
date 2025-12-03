import type { HTMLAttributes, ReactNode, MouseEvent } from 'react';

export type LoaderType = 'circular' | 'linear';
export type ActionPlacement = 'left' | 'right';

export type BaseFileProps = {
    /**
     * Название файла
     */
    label?: ReactNode;
    /**
     * Размер файла в байтах или любая другая строка
     */
    description?: number | string | ReactNode;
    /**
     * Размещение контента ( кнопка действия и loader ) относительно текста
     * @default 'right'
     */
    actionPlacement?: ActionPlacement;
    /**
     * Контент слева (иконка файла)
     * thumbIcon, thumbUrl и fileUrl не могут быть использованы одновременно
     */
    thumbIcon?: ReactNode;
    /**
     * Контент слева (URL изображения)
     * thumbIcon, thumbUrl и fileUrl не могут быть использованы одновременно
     */
    thumbUrl?: string;
    /**
     * Контент слева, что иконка файла определяется автоматически в зависимости от расширения файла
     * thumbIcon, thumbUrl и fileUrl не могут быть использованы одновременно
     */
    fileUrl?: string;
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
    /**
     * Функция вызываемая при отмене загруки
     */
    onCancel?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type FileProps = Omit<HTMLAttributes<HTMLDivElement>, 'label'> & BaseFileProps;
