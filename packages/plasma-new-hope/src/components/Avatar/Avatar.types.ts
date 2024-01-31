import { HTMLAttributes } from 'react';

export enum ActionTypes {
    SCALE = 'scale',
    HOVER = 'hover',
}

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
    status?: 'online' | 'offline';
};

type AdditionProps =
    | {
          // Тип экшена при наведении
          actionType?: ActionTypes.SCALE;
      }
    | {
          actionType: ActionTypes.HOVER;
          // Иконка при наведении
          actionIcon?: string;
      };

export type AvatarProps = HTMLAttributes<HTMLDivElement> & CustomAvatarProps & AdditionProps;
