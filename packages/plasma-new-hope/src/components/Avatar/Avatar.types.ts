import { HTMLAttributes } from 'react';

type CustomAvatarProps = {
    // Размер аватара
    size: 'xxl' | 'l' | 'm' | 's' | 'fit';
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
};

export type StatusLabels = Record<'active' | 'inactive', string>;

export type AvatarProps = HTMLAttributes<HTMLDivElement> & CustomAvatarProps;
