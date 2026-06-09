import type { CSSProperties, InputHTMLAttributes, ChangeEventHandler, Dispatch, ReactNode } from 'react';
import { SafeExtract } from 'src/types';
import type { RequiredProps, HintProps, LabelProps } from 'src/components/TextField/TextField.types';

import { FocusedPathState, TreePathState, TreePathAction } from './reducers';
import type { ValueToCheckedMapType, CheckedType } from './hooks';

export type Value = string | string[];
export type Placement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';

export type ItemOption = {
    /**
     * Значение у item.
     */
    value: string;
    /**
     * Метка-подпись к item.
     */
    label: string;
    /**
     * Сторона открытия вложенного выпадающего списка относительно текущего элемента.
     * @default bottom-start
     */
    placement?: Placement;
    /**
     * Список дочерних items.
     */
    items?: ItemOption[];
    /**
     * Item не активен.
     */
    disabled?: boolean;
    /**
     * Слот для контента слева.
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа.
     */
    contentRight?: ReactNode;
    /**
     * Classname для item.
     */
    className?: string;
    /**
     * Максимальная высота дочернего выпадающего списка.
     */
    listMaxHeight?: CSSProperties['height'];
};

export type ItemOptionTransformed = Omit<ItemOption, 'items'> & {
    items?: ItemOptionTransformed[];
    parent?: ItemOptionTransformed | null;
};

export type SelectAllProps = {
    checked?: boolean;
    indeterminate?: boolean;
    label?: string;
    onClick?: () => void;
    sticky?: boolean;
};

type ComboboxSingleProps<T extends ItemOption> = {
    multiple?: false;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string, item: T | null) => void;
    isTargetAmount?: false;
    targetAmount?: never;
    renderValue?: never;
    selectAllOptions?: never;
    chipClickArea?: never;
};

type ComboboxMultipleProps<T extends ItemOption> = {
    multiple: true;
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[], item: T | null) => void;
    isTargetAmount?: true;
    targetAmount?: number;
    renderValue?: (item: T) => string;
    selectAllOptions?: SelectAllProps;
    chipClickArea?: 'full' | 'close-icon';
};

type ComboboxSingleNativeProps<T extends ItemOption> = Omit<ComboboxSingleProps<T>, 'onChange' | 'value'> & {
    /**
     * Имя поля. Используется для нативной формы и react-hook-form register.
     */
    name: string;
    value?: never;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
};

type ComboboxMultipleNativeProps<T extends ItemOption> = Omit<ComboboxMultipleProps<T>, 'onChange' | 'value'> & {
    name: string;
    value?: never;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
};

/**
 *  Описание режимов работы компонента:
 *
 *  1. Если value !== null && value !== undefined, компонент controlled.
 *     name не включает native-режим, onChange вызывается как (value, item).
 *  2. Если value нет и name есть, компонент uncontrolled внутри,
 *     но изменения дополнительно прокидываются в hidden <select> и наружу как native-like change event.
 *     Это сценарий react-hook-form register / обычной HTML-формы.
 *  3. Если value нет и name нет, компонент uncontrolled.
 *     Значение хранится во внутреннем internalValue, а onChange, если передан,
 *     вызывается старым контрактом (value, item).
 */
type IsMultiple<T extends ItemOption> =
    | ComboboxSingleProps<T>
    | ComboboxMultipleProps<T>
    | ComboboxSingleNativeProps<T>
    | ComboboxMultipleNativeProps<T>;

type BasicProps<T extends ItemOption = ItemOption> = {
    /**
     * Список элементов.
     */
    items: T[];
    /**
     * Режим отображения выпадающего списка в виде дерева.
     * @default false
     */
    treeView?: boolean;
    /**
     * Сторона расположения стрелки скрытия/раскрытия.
     * @default left
     */
    arrowPlacement?: 'left' | 'right';
    /**
     * Сторона открытия дропдауна относительно target элемента.
     * @default bottom-start
     */
    placement?: Placement;
    /**
     * Вариант: обычный или сжатый
     * @default normal
     */
    variant?: 'normal' | 'tight';
    /**
     * CSS-свойство z-index для выпадающего списка.
     */
    zIndex?: CSSProperties['zIndex'];
    /**
     * Максимальная высота выпадающего списка.
     */
    listMaxHeight?: CSSProperties['height'];
    /**
     * Значение css width для выпадающего списка.
     * @example width="200px"
     */
    listWidth?: CSSProperties['width'];
    /**
     * Портал для выпадающего списка. Принимает id контейнера или ref.
     */
    portal?: string | React.RefObject<HTMLElement | null>;
    /**
     * Placeholder.
     */
    placeholder?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    helperText?: string;
    /**
     * Слот для контента слева.
     */
    contentLeft?: React.ReactElement;
    /**
     * Слот для контента справа.
     */
    contentRight?: React.ReactElement;
    /**
     * Слот для вспомогательного текста справа.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста слева.
     */
    textAfter?: string;
    /**
     * Callback для кастомной настройки элемента в выпадающем списке.
     */
    renderItem?: (item: T) => React.ReactNode;
    /**
     * Callback для кастомной настройки иконки выбранного элемента.
     */
    renderSelectionIcon?: (selected: boolean | SafeExtract<CheckedType, 'indeterminate'>) => React.ReactNode;
    /**
     * Функция фильтрации элементов.
     */
    filter?: (item: T, textValue: string) => boolean;
    /**
     * Закрывать ли выпадающий список после выбора элемента.
     * @default если single, то true; если multiple, то false; если передан alwaysOpened, то false
     */
    closeAfterSelect?: boolean;
    /**
     * Обработчик изменения значения в строке поиска.
     */
    onChangeValue?: (value: string) => void;
    /**
     * Функция валидации вводимых значений.
     */
    filterValue?: (value: string) => boolean;
    /**
     * Коллбэк, срабатывающий при скролле.
     */
    onScroll?: (e: React.UIEvent<HTMLElement>) => void;
    /**
     * Событие сворачивания/разворачивания выпадающего списка.
     */
    onToggle?: (isOpen: boolean) => void;
    /**
     * Ячейка для контента в начале выпадающего списка.
     */
    beforeList?: React.ReactNode;
    /**
     * Ячейка для контента в конце выпадающего списка.
     */
    afterList?: React.ReactNode;
    /**
     * Виртуализация в выпадающем списке.
     * Не поддерживается в многоуровневых списках.
     * @default false
     */
    virtual?: boolean;
    /**
     * Режим работы взаимодействия с элементами.
     * - default: элемент можно выбрать и можно отменить его выбор.
     * - radio: если элемент выбран, то отменить его выбор нельзя. Только для single-режима.
     * @default default
     */
    mode?: 'default' | 'radio';
    /**
     * Текст для состояния когда нет результата.
     */
    emptyStateDescription?: React.ReactNode;
    /**
     * Коррекция placement, если выпадающий список находится за пределами экрана.
     * @default false
     */
    flip?: boolean;
    /**
     * Смещение выпадающего списка при соприкосновении с границами экрана.
     * @default false
     */
    shift?: boolean;
    /**
     * Label в элементе выпадающего списка в одну строку или с переносом строк.
     * @default true
     */
    singleLine?: boolean;
    /**
     * Компонент доступен только для чтения.
     * @default false
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен.
     * @default false
     */
    disabled?: boolean;
    /**
     * Дропдаун открыт всегда.
     * @default false
     */
    alwaysOpened?: boolean;

    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Внешний вид чипа в multiple-режиме.
     */
    chipView?: string;
    /**
     * Размер тултипа
     */
    hintSize?: string;
    /**
     * Вид тултипа
     */
    hintView?: string;
};

type PrivateProps = {
    /**
     * @private
     */
    _offset?: [number, number];
};

export type ComboboxProps<T extends ItemOption = ItemOption> = BasicProps<T> &
    LabelProps &
    IsMultiple<T> &
    RequiredProps &
    HintProps &
    PrivateProps &
    Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'value' | 'onChange' | 'placeholder' | 'defaultValue' | 'onScroll' | 'size'
    >;

export type ItemContext = {
    focusedPath: FocusedPathState;
    checked: ValueToCheckedMapType;
    multiple: ComboboxProps['multiple'];
    size: ComboboxProps['size'];
    handleCheckboxChange: (item: ItemOptionTransformed) => void;
    handleItemClick: (item: ItemOptionTransformed, e: React.MouseEvent<HTMLElement>) => void;
    variant: ComboboxProps['variant'];
    renderItem: ComboboxProps['renderItem'];
    renderSelectionIcon: ComboboxProps['renderSelectionIcon'];
    treeId: string;
    treePath: TreePathState;
    dispatchTreePath: Dispatch<TreePathAction>;
    arrowPlacement: ComboboxProps['arrowPlacement'];
    valueToPathMap: Map<string, string[]>;
    singleLine: ComboboxProps['singleLine'];
};

export type FloatingPopoverProps = {
    target: React.ReactNode | ((ref: React.MutableRefObject<HTMLElement | null>) => React.ReactNode);
    children: React.ReactNode;
    opened: boolean;
    placement: Placement;
    isInner: boolean;
    shift: ComboboxProps['shift'];
    flip: ComboboxProps['flip'];
    onToggle?: (opened: boolean) => void;
    portal?: ComboboxProps['portal'];
    listWidth?: ComboboxProps['listWidth'];
    zIndex?: ComboboxProps['zIndex'];
    offset?: [number, number];
};
