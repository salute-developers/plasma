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
    // Скейл при наведении
    isScalable?: boolean;
};

export type AvatarProps = HTMLAttributes<HTMLDivElement> & CustomAvatarProps;
