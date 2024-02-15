import { KeyboardEvent } from 'react';

import type { EnumerationType, ComboboxPrimitiveValue, ValueType } from '../../Combobox.types';

export interface ComboboxTargetProps {
    /**
     * Уникальный идентификатор элемента.
     */
    id?: string;
    /**
     * Тип комбобокса.
     * Варианты: single, multiple
     */
    valueType?: ValueType;
    /**
     * Тип перечисления выбранных значений.
     * Варианты: comma, chips
     */
    enumerationType?: EnumerationType;
    /**
     * Дропдаун открыт или нет.
     * @default
     *  false
     */
    opened?: boolean;
    /**
     * Текст лейбла.
     */
    label?: string;
    /**
     * Текст подсказки.
     */
    placeholder?: string;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Элемент формы не может изменяться пользователем.
     */
    readOnly?: boolean;
    /**
     * Размер компонента Combobox.
     */
    size?: string;
    /**
     * Был ли закрыт выпадающий список без изменений.
     */
    closedWithoutChanges?: React.MutableRefObject<boolean>;
    /**
     * Выбранные значения.
     */
    values?: Array<Array<ComboboxPrimitiveValue>>;
    /**
     * Значение строки поиска.
     */
    search?: string;
    /**
     * Ref для компонент чипов.
     */
    chipsRefs?: React.MutableRefObject<Array<HTMLButtonElement>>;
    /**
     * Ref для компонента инпута.
     */
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
    /**
     * Обработчик изменения выбранного значения.
     */
    onChange?: (value?: Array<ComboboxPrimitiveValue>) => void;
    /**
     * Обработчик изменения значения поиска.
     */
    onSearch?: (value?: string, opened?: boolean) => void;
    /**
     * Обработчик нажатия клавиши на target.
     */
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
