import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Элемент меню в секции NavigationDrawer.
 */
type MenuItem<T extends boolean = false> = {
    /**
     * Текст элемента меню.
     */
    label: string;
    /**
     * Action при клике на элемент меню.
     * Получает либо URL в качестве строки, либо функцию, срабатывающую при клике.
     */
    action?: string | ((event: React.MouseEvent<HTMLDivElement>) => void);
    /**
     * Элемент меню неактивен.
     * @default false
     */
    disabled?: boolean;
    /**
     * Элемент меню выбран.
     * @default false
     */
    selected?: boolean;
    /**
     * Счетчик у элемента меню.
     */
    counter?: number;
    /**
     * Флаг для отображения индикатора у элемента меню.
     */
    hasIndicator?: boolean;
} & (T extends true ? { icon: ReactNode } : { icon?: never });

/**
 * Секция меню в NavigationDrawer.
 */
type SectionItem<T extends boolean = false> = {
    /**
     * Список элементов в секции.
     */
    items: MenuItem<T>[];
    /**
     * Заголовок секции. При его отсутствии появится разделитель.
     */
    label?: ReactNode;
};

export type NavigationDrawerProps = {
    /**
     * Режим отображения NavigationDrawer.
     * - static: статичный контент справа.
     * - drawer: открывается поверх контента. Контент справа доступен для взаимодействия, нет затемнения.
     * - overlay: открывается поверх контента. Контент справа не доступен для взаимодействия, есть затемнение.
     * @default static
     */
    mode?: 'static' | 'overlay' | 'drawer';
    /**
     * Флаг для открытия/закрытия NavigationDrawer. Если не указан, то NavigationDrawer открыт.
     * @default true
     */
    opened?: boolean;
    /**
     * Callback, срабатывающий при закрытии меню. Только при mode="overlay".
     */
    onHide?: () => void;
    /**
     * Ячейка для контента в начале меню.
     */
    header?: ReactNode;
    /**
     * Ячейка для контента в конце меню.
     */
    footer?: ReactNode;
    /**
     * Размер элемента меню.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
} & (
    | {
          /**
           * Список секций меню.
           */
          sections: SectionItem<true>[];
          withContentLeft: true;
      }
    | {
          sections: SectionItem<false>[];
          withContentLeft?: never;
      }
) &
    HTMLAttributes<HTMLDivElement>;
