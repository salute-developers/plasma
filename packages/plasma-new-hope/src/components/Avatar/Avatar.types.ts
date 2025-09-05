import { HTMLAttributes } from 'react';

import type { CustomCounterProps } from '../Counter/Counter.types';
import type { CustomBadgeProps } from '../Badge/Badge.types';

type Only<T, U> = {
    [P in keyof T]: T[P];
} &
    {
        [P in keyof U]?: never;
    };

type OneOf<T, U> = Only<T, U> | Only<U, T>;

type ExtraBadgeProps = {
    /**
     * Вид Badge
     * @default
     * default
     */
    badgeView?: string;
    /**
     * Компонент c округлым border-radius
     */
    pilled?: boolean;
} & Omit<CustomBadgeProps, 'size' | 'view' | 'maxWidth'>;

type ExtraCounterProps = {
    /**
     * Вид Counter
     * @default
     * default
     */
    counterView?: string;
    /**
     * Отображаемое число. Не может быть меньше 1.
     */
    count?: number;
} & Omit<CustomCounterProps, 'size' | 'view' | 'count'>;

type ExtraProps = OneOf<ExtraBadgeProps, ExtraCounterProps>;

type CustomAvatarProps = {
    // Форма аватара
    shape?: 'string';
    // Размер аватара
    size?: string;
    // ФИО человека
    name?: string;
    // Ссылка на фотографию
    url?: string;
    // Кастомный текст вместо фотографии
    customText?: string;
    // Статус профиля
    status?: 'active' | 'inactive';
    // Масштабируемый при наведении
    isScalable?: boolean;
    // Фокус
    focused?: boolean;
    /**
     * Словарь для озвучивания значений свойства status [a11y]
     * @default
     * { active: 'Активен', inactive: 'Неактивен' }
     */
    statusLabels?: StatusLabels;
    /**
     * Включить отображение дополнительного элемента
     */
    hasExtra?: boolean;
    /**
     * Тип дополнительного элемента
     */
    type?: 'badge' | 'counter';
    /**
     * Расположение дополнительного элемента
     */
    extraPlacement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
} & ExtraProps;

export type StatusLabels = Record<'active' | 'inactive', string>;

export type AvatarProps = HTMLAttributes<HTMLDivElement> & CustomAvatarProps;
