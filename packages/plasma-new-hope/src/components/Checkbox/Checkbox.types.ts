import type { InputHTMLAttributes } from '../../types';

export interface BaseboxProps {
    /**
     * Уникальный идентификатор контрола
     */
    id?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: React.ReactNode;
    /**
     * Описание элемента
     */
    description?: React.ReactNode;
    /**
     * Title и description в одну строку или с переносом строк
     */
    singleLine?: boolean;
    /**
     * Неопределенное состояние компонента - когда часть потомков не выбрана.
     */
    indeterminate?: boolean;
    size?: string;
    view?: string;
    focused?: boolean;
}

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseboxProps {}
