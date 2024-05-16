import { KeyboardEvent } from 'react';

import { SelectNewProps } from '../../SelectNew.types';

export type SelectPrimitiveValue = string | number | boolean;

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
    target?: SelectNewProps['target'];
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
    values?: any;
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
    targetView?: SelectNewProps['targetView'];
}
