import type { ButtonHTMLAttributes, ComponentType, ReactNode } from 'react';

type AsProps<T = unknown> = {
    as?: keyof JSX.IntrinsicElements | ComponentType<T>;
    forwardedAs?: keyof JSX.IntrinsicElements | ComponentType<T>;
};

export type IconPosition =
    | 'center'
    | 'center-left'
    | 'center-right'
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right';

export type EmbeddedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    AsProps & {
        /**
         * Иконка кнопки
         */
        children?: ReactNode;
        /**
         * Вид кнопки
         */
        view?: string;
        /**
         * Размер контейнера иконки
         */
        size?: string;
        /**
         * Кнопка неактивна
         */
        disabled?: boolean;
        /**
         * У кнопки состояние загрузки
         */
        isLoading?: boolean;
        /**
         * Слот для контента загрузки
         */
        loader?: ReactNode;
        /**
         * Позиция иконки внутри кнопки
         * @default 'center'
         */
        position?: IconPosition;
    };
