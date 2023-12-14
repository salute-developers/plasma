import { InputHTMLAttributes } from 'react';

import { Filter } from '../../engines/types';

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

    focused?: boolean;
}

export type SwitchProps = Filter<InputHTMLAttributes<HTMLInputElement>, 'size'> & SwitchPropsVariations;
