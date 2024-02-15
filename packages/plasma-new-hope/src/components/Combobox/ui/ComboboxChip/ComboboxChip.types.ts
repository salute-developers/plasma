import { KeyboardEvent } from 'react';

import type { ComboboxPrimitiveValue } from '../../Combobox.types';

export interface ComboboxChipProps {
    /**
     * Отображаемый текст.
     */
    text: ComboboxPrimitiveValue;
    /**
     * Выбранное значение.
     */
    value: ComboboxPrimitiveValue;
    /**
     * Номер компонента.
     */
    index: number;
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
    onClear: (value: ComboboxPrimitiveValue, text: ComboboxPrimitiveValue) => void;
    /**
     * Обработчик клика на выбранное значение.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Обработчик нажатия клавиши.
     */
    onKeyDown?: (
        value: ComboboxPrimitiveValue,
        text: ComboboxPrimitiveValue,
        index: number,
        event: KeyboardEvent<HTMLButtonElement>,
    ) => void;
}
