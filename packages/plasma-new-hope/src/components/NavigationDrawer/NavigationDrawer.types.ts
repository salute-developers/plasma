import type { HTMLAttributes, ReactNode } from 'react';

type WithIcon = {
    /**
     * Иконка меню. Отображается слева от текста.
     */
    icon: ReactNode;
};

type WithoutIcon = { icon?: never };

type WithCounter = {
    /**
     * Счетчик у элемента меню.
     */
    counter?: number;
    hasIndicator?: never;
};

type WithIndicator = {
    counter?: never;
    /**
     * Флаг для отображения индикатора у элемента меню.
     */
    hasIndicator?: boolean;
};

type MenuItemBase = {
    /**
     * Текст элемента меню.
     */
    label: ReactNode;
    /**
     * Action при клике на элемент меню.
     * Получает либо URL в качестве строки, либо функцию, срабатывающую при клике.
     */
    action?: string | ((event: React.MouseEvent<HTMLDivElement>) => void);
    /**
     * Признак того, что элемент меню неактивен.
     * @default false
     */
    disabled?: boolean;
    /**
     * Элемент меню выбран.
     * @default false
     */
    selected?: boolean;
};

/**
 * Элемент меню в секции NavigationDrawer.
 */
export type MenuItem<HasIcon extends boolean = true> = MenuItemBase &
    (HasIcon extends true ? WithIcon : WithoutIcon) &
    (WithCounter | WithIndicator);

type SectionWithDivider = {
    /**
     * Режим работы секции.
     * @default withDivider
     */
    mode?: 'withDivider';
    collapsible?: never;
    collapsedByDefault?: never;
    onToggle?: never;
};

type SectionWithLabel = {
    /**
     * Режим работы секции.
     * @default withDivider
     */
    mode: 'withLabel';
    /**
     * Возможность скрывать секцию.
     * @default false
     */
    collapsible?: boolean;
    /**
     * Секция скрыта по умолчанию. Только при collapsible = true.
     * @default false
     */
    collapsedByDefault?: boolean;
    /**
     * Хендлер сворачивания/разворачивания секции.
     */
    onToggle?: (opened: boolean) => void;
};

/**
 * Секция меню в NavigationDrawer.
 */
export type SectionItem<HasIcon extends boolean = true> = {
    /**
     * Список элементов в секции.
     */
    items: MenuItem<HasIcon>[];
    /**
     * Заголовок секции.
     */
    label?: ReactNode;
} & (SectionWithDivider | SectionWithLabel);

type WithMenuIconBase = {
    /**
     * Список секций меню.
     */
    sections: SectionItem<true>[];
    /**
     * Показывать иконки в элементах меню.
     * Влияет на режим отображения NavigationDrawer
     * Если hasMenuIcon: false, то доступен только режим static
     * и невозможно управлять открытием/закрытием NavigationDrawer.
     * @default true
     */
    hasMenuIcon?: true;
    /**
     * Флаг для открытия/закрытия NavigationDrawer. Если не указан, то NavigationDrawer открыт.
     * @default true
     */
    opened?: boolean;
};

type ModeStatic = {
    /**
     * Режим отображения NavigationDrawer.
     * - static: сдвигает контент справа.
     * - overlay: открывается поверх контента. Контент справа не доступен для взаимодействия, есть затемнение.
     * - drawer: открывается поверх контента. Контент справа доступен для взаимодействия, нет затемнения.
     * @default static
     */
    mode: 'static';
    onCloseOverlay?: never;
};

type ModeOverlay = {
    /**
     * Режим отображения NavigationDrawer.
     * - overlay: открывается поверх контента. Контент справа не доступен для взаимодействия, есть затемнение.
     * @default static
     */
    mode: 'overlay';
    /**
     * Функция, которая вызывается при клике на затемнение.
     */
    onCloseOverlay?: () => void;
};

type ModeDrawer = {
    /**
     * Режим отображения NavigationDrawer.
     * - drawer: открывается поверх контента. Контент справа доступен для взаимодействия, нет затемнения.
     * @default static
     */
    mode: 'drawer';
    onCloseOverlay?: never;
};

type WithMenuIcon = WithMenuIconBase & (ModeStatic | ModeOverlay | ModeDrawer);

type WithoutMenuIcon = {
    /**
     * Показывать иконки в элементах меню.
     * Доступен только режим static и невозможно управлять открытием/закрытием NavigationDrawer.
     * @default true
     */
    hasMenuIcon: false;
    /**
     * Список секций меню.
     */
    sections: SectionItem<false>[];
    /**
     * Режим отображения NavigationDrawer.
     * - static: NavigationDrawer сдвигает контент справа.
     * @default static
     */
    mode: 'static';
    onCloseOverlay?: never;
    opened?: never;
};

export type NavigationDrawerProps = {
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
} & (WithMenuIcon | WithoutMenuIcon) &
    HTMLAttributes<HTMLDivElement>;
