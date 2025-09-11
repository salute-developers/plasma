import type { ReactNode } from 'react';

import type { InputHTMLAttributes } from '../../types';

export interface SwitchPropsPropsBase {
    /**
     * Метка-подпись к элементу
     */
    label?: ReactNode;
    /**
     * Перенос строки label
     * @default true
     */
    singleLine?: boolean;
    /**
     * Дополнительное описание
     */
    description?: string;
}

export interface SwitchPropsVariations extends SwitchPropsPropsBase {
    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер toggle.
     */
    toggleSize?: string;
    /**
     * Расположение подпись
     */
    labelPosition?: 'before' | 'after';

    /**
     * Добавить рамку при фокусе
     */
    focused?: boolean;

    /**
     * Нажатие на компонент
     * @deprecated
     */
    pressed?: boolean;

    /**
     * Добавить рамку при фокусе
     * @deprecated
     */
    outlined?: boolean;
}

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, SwitchPropsVariations {}
