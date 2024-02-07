import type { AsProps } from '@salutejs/plasma-core';
import type { ButtonHTMLAttributes } from 'react';

export type TabItemProps = AsProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        /**
         * Активен ли TabItem
         * @deprecated Используйте свойство `selected`
         */
        isActive?: boolean;
        /**
         * Выбран ли TabItem
         */
        selected?: boolean;
        /**
         * Скрыт ли TabItem
         * @default false
         */
        disabled?: boolean;
        /**
         * TabItem c округлым border-radius
         * @default false
         */
        pilled?: boolean;
        /**
         * Фон TabItem меняется с анимацией
         * @default true
         */
        animated?: boolean;
        /**
         * Контент слева
         */
        contentLeft?: React.ReactNode;
        /**
         * Контент справа
         */
        contentRight?: React.ReactNode;
        /**
         * Размер TabItem
         */
        size?: string;
        /**
         * Вид TabItem
         */
        view?: string;
    };
