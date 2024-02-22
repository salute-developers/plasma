import type { InputHTMLAttributes } from 'react';
import { FocusProps } from '@salutejs/plasma-new-hope/styled-components';
export declare type SwitchProps = {
    /**
     * Уникальный идентификатор контрола
     */
    id?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: React.ReactNode;
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
     * Описание элемента
     */
    description?: React.ReactNode;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
    /**
     * Нажатие на компонент
     * @deprecated
     */
    pressed?: boolean;
    /**
     * Добавить рамку при фокусе
     */
    focused?: boolean;
    /**
     * Добавить рамку при фокусе
     * @deprecated
     */
    outlined?: boolean;
} & FocusProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange' | 'onFocus' | 'onBlur'> & Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'checked' | 'disabled' | 'readOnly' | 'onChange' | 'onFocus' | 'onBlur'>;
/**
 * Визуальный переключатель между двумя взаимоисключающими состояниями — вкл. и выкл.
 */
export declare const Switch: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    size: {
        m: string;
    };
    view: {
        default: string;
    };
    labelPosition: {
        before: string;
        after: string;
    };
    disabled: {
        true: string;
    };
    focused: {
        true: string;
    };
}> & import("@salutejs/plasma-new-hope/types/engines/types").Filter<InputHTMLAttributes<HTMLInputElement>, "size"> & import("@salutejs/plasma-new-hope/types/components/Switch/Switch.types").SwitchPropsVariations & import("react").RefAttributes<HTMLInputElement>>;
