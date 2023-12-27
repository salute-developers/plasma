import type { SelectPrimitiveValue } from '../../Select.types';

export interface SelectChipProps {
    /**
     * Отображаемый текст.
     */
    text: SelectPrimitiveValue;
    /**
     * Выбранное значение.
     */
    value: SelectPrimitiveValue;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
    /**
     * Элемент формы не может изменяться пользователем
     */
    readOnly?: boolean;
    /**
     * Обработчик удаления выбранного значения.
     */
    onClear: (value: SelectPrimitiveValue, text: SelectPrimitiveValue) => void;
    /**
     * Обработчик клика на выбранное значение.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
