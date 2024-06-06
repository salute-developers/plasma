import type { InputHTMLAttributes } from '../../types';

export interface SwitchPropsPropsBase {
    /**
     * Метка-подпись к элементу
     */
    label?: string;
}

export interface SwitchPropsVariations extends SwitchPropsPropsBase {
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     */
    view?: string;
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
