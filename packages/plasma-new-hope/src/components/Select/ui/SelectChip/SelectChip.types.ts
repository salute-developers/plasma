import { KeyboardEvent } from 'react';

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
     * Номер компонента.
     */
    index: number;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Элемент формы не может изменяться пользователем.
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
    /**
     * Обработчик нажатия клавиши.
     */
    onKeyDown?: (
        value: SelectPrimitiveValue,
        text: SelectPrimitiveValue,
        index: number,
        event: KeyboardEvent<HTMLButtonElement>,
    ) => void;
}
