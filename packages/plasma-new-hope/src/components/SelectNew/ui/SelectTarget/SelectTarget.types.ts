import { KeyboardEvent } from 'react';

import type { SelectPrimitiveValue, TargetType } from '../../Select.types';

export interface SelectTargetProps {
    /**
     * Номер порядка получения фокуса при переходе между элементами.
     */
    tabIndex?: number;
    /**
     * Уникальный идентификатор элемента.
     */
    id?: string;
    /**
     * Дропдаун открыт или нет.
     * @default
     *  false
     */
    opened?: boolean;
    /**
     * Вид элемента, рядом с которым появляется список.
     */
    target?: TargetType;
    /**
     * Текст лейбла.
     */
    label?: string;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Элемент формы не может изменяться пользователем.
     */
    readOnly?: boolean;
    /**
     * Размер компонента Select.
     */
    size?: string;
    /**
     * Выбранные значения.
     */
    values?: Array<Array<SelectPrimitiveValue>>;
    /**
     * Ref для компонент чипов.
     */
    chipsRefs?: React.MutableRefObject<Array<HTMLButtonElement>>;
    /**
     * Обработчик изменения выбранного значения.
     */
    onChange?: (value?: Array<SelectPrimitiveValue>) => void;
    /**
     * Обработчик нажатия клавиши на target.
     */
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
}
