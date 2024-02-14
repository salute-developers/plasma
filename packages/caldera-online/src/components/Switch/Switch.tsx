import type { InputHTMLAttributes } from 'react';
import { switchConfig, component, mergeConfig, FocusProps } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Switch.config';

const mergedConfig = mergeConfig(switchConfig, config);
const SwitchComponent = component(mergedConfig);

export type SwitchProps = {
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
} & FocusProps &
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange' | 'onFocus' | 'onBlur'> &
    Pick<
        InputHTMLAttributes<HTMLInputElement>,
        'name' | 'value' | 'checked' | 'disabled' | 'readOnly' | 'onChange' | 'onFocus' | 'onBlur'
    >;

/**
 * Визуальный переключатель между двумя взаимоисключающими состояниями — вкл. и выкл.
 */
export const Switch = SwitchComponent;
