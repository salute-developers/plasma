import { InputHTMLAttributes } from 'react';

import { Filter } from '../../engines/types';

export interface SwitchPropsPropsBase {
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

    focused?: boolean;
}

// export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaPropsExtends;

export type SwitchProps = Filter<InputHTMLAttributes<HTMLInputElement>, 'size'> & SwitchPropsVariations;
