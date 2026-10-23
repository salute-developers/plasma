import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export type TabBarSeparation = 'none' | 'shadow' | 'divider';

export type TabBarProps = HTMLAttributes<HTMLElement> & {
    /**
     * Вид панели.
     */
    view?: string;
    /**
     * Размер панели.
     */
    size?: string;
    /**
     * Плавающая панель: скругление со всех сторон и тень вниз.
     * Разделитель в этом режиме не показывается.
     * @default false
     */
    island?: boolean;
    /**
     * Отделение панели от контента.
     * `divider` применяется только когда `island` выключен.
     * @default 'none'
     */
    separation?: TabBarSeparation;
    /**
     * Фон у выбранного элемента. Цвет фона и текста зависит от `view`.
     * @default false
     */
    hasSelectedItemBackground?: boolean;
    /**
     * Нижний индикатор домашней зоны. У `island` рисуется под карточкой.
     * @default false
     */
    homeIndicator?: boolean;
    children?: ReactNode;
};

export type TabBarItemProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    /**
     * Иконка элемента.
     */
    icon?: ReactNode;
    /**
     * Подпись под иконкой. Длинный текст обрезается.
     * Если подписи нет, передайте `aria-label` или `aria-labelledby`:
     * иконка скрыта от скринридера, и без имени останется только число счётчика.
     */
    label?: ReactNode;
    /**
     * Элемент выбран.
     * @default false
     */
    selected?: boolean;
    /**
     * Число в счётчике у иконки.
     */
    counter?: number;
    /**
     * Доля оставшейся ширины панели, от 0 до 1.
     * 0 — ширина по содержимому. Значения больше 0 делят свободное место пропорционально.
     * @default 1
     */
    weight?: number;
};

export type TabBarSlotProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Доля оставшейся ширины панели, от 0 до 1.
     * 0 — ширина по содержимому, слот может быть пустым.
     * @default 0
     */
    weight?: number;
};
