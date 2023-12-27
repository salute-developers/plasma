import type { EnumerationType, SelectPrimitiveValue, TargetType } from '../../Select.types';

export interface SelectTargetProps {
    /**
     * Уникальный идентификатор элемента.
     */
    id?: string;
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
    isOpen?: boolean;
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
     * Обработчик удаления выбранного значения.
     */
    onChipClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Обработчик изменения выбранного значения.
     */
    onChangeValue?: (value?: Array<SelectPrimitiveValue>) => void;
}
