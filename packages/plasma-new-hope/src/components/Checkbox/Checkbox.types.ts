import type { InputHTMLAttributes } from 'src/types';
import type { ReactNode } from 'react';

export interface BaseboxProps {
    /**
     * Стиль для UI конфигурации
     * Влияет на выбор предустановленного набора токенов
     * @default default
     */
    appearance?: string;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Уникальный идентификатор компонента
     */
    id?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: ReactNode;
    /**
     * Описание элемента
     */
    description?: ReactNode;
    /**
     * Title и description в одну строку или с переносом строк
     */
    singleLine?: boolean;
    /**
     * Неопределенное состояние компонента - когда часть потомков не выбрана.
     */
    indeterminate?: boolean;
    /**
     * Компонента находиться в фокусе
     */
    focused?: boolean;
    /**
     * Кастомная иконка галочки.
     */
    checkIcon?: ReactNode;
    /**
     * Кастомная иконка indeterminate-состояния.
     */
    indeterminateIcon?: ReactNode;
    /**
     * Состояние readOnly применяется исключительно к текстовым полям.
     * @deprecated
     * @see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
     */
    readOnly?: boolean;
}

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'readOnly'>, BaseboxProps {}
