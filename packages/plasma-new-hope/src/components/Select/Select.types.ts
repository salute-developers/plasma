import type {
    CSSProperties,
    ButtonHTMLAttributes,
    ChangeEventHandler,
    Dispatch,
    ReactNode,
    ReactElement,
    Ref,
    RefObject,
    MouseEvent,
    UIEvent,
} from 'react';
import type { SafeExtract, NeverProps } from 'src/types';

import type { RequiredProps, LabelProps, HintProps } from '../TextField/TextField.types';

import { FocusedPathState, TreePathState, TreePathAction } from './reducers';
import type { ValueToCheckedMapType } from './hooks/usePathMaps';

export type SelectPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type SelectPlacement = 'top' | 'bottom' | 'right' | 'left' | 'auto';
export type SelectValue = string | string[];
export type SelectCheckedState = boolean | 'done' | 'dot' | 'indeterminate';

export type { RequiredProps, HintProps };

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
     * @default right
     */
    placement?: SelectPlacement | Array<SelectPlacementBasic>;
    /**
     * Список дочерних items.
     */
    items?: Array<ItemOption>;
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
    items?: Array<ItemOptionTransformed>;
    parent?: ItemOptionTransformed | null;
};

export type SelectAllProps = {
    checked?: boolean;
    indeterminate?: boolean;
    label?: string;
    onClick?: () => void;
    sticky?: boolean;
};

type TextfieldLikeTargetProps = {
    /**
     * Стиль селекта: button-like или textfield-like.
     * @default textfield-like
     */
    target?: 'textfield-like';
    /**
     * Слот для контента слева.
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа.
     */
    contentRight?: ReactElement;
    /**
     * Placeholder.
     */
    placeholder?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    helperText?: string;
    /**
     * Внешний вид chip.
     * @default default
     */
    chipType?: 'default' | 'text';
    /**
     * Область, по которой происходит нажатие.
     * @default full
     */
    chipClickArea?: 'full' | 'close-icon';
} & RequiredProps &
    HintProps &
    LabelProps;

type ButtonLikeTargetProps = {
    target: 'button-like';
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    contentLeft?: never;
    contentRight?: never;
    placeholder?: string;
    helperText?: never;
    keepPlaceholder?: never;
    chipType?: never;
    chipClickArea?: never;
} & NeverProps<RequiredProps & HintProps & Omit<LabelProps, 'label'>>;

type Target = TextfieldLikeTargetProps | ButtonLikeTargetProps;

type SelectSingleProps<K extends ItemOption> = {
    multiselect?: false;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string, item: K | null) => void;
    /**
     * Если включено - будет выведено общее количество выбранных элементов вместо перечисления.
     * @default false
     */
    isTargetAmount?: never | false;
    /**
     * Callback для кастомной настройки значения в селекте.
     */
    renderTarget?: (value: K, opened?: boolean) => ReactNode;
    selectAllOptions?: never;
};

type SelectMultiselectProps<K extends ItemOption> = {
    multiselect: true;
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[], item: K | null) => void;
    isTargetAmount?: true;
    renderTarget?: (value: K[], opened?: boolean) => ReactNode;
    selectAllOptions?: SelectAllProps;
};

type SelectSingleNativeProps<K extends ItemOption> = Omit<SelectSingleProps<K>, 'onChange' | 'value'> & {
    /**
     * Имя поля. Используется для нативной формы и react-hook-form register.
     */
    name: string;
    value?: never;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
};

type SelectMultiselectNativeProps<K extends ItemOption> = Omit<SelectMultiselectProps<K>, 'onChange' | 'value'> & {
    name: string;
    value?: never;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
};

/**
 *  Описание режимов работы компонента:
 *
 *  1. Если value !== null && value !== undefined, компонент controlled.
 *     name при этом только рендерит hidden <select> для формы,
 *     но onChange вызывается как (value, item), не как native event.
 *  2. Если value нет и name есть, компонент uncontrolled внутри,
 *     но изменения дополнительно прокидываются в hidden <select> и наружу как native-like change event.
 *     Это сценарий react-hook-form register / обычной HTML-формы.
 *  3. Если value нет и name нет, компонент uncontrolled.
 *     Значение хранится во внутреннем internalValue, а onChange, если передан,
 *     вызывается старым контрактом (value, item).
 */
type IsMultiselect<K extends ItemOption> =
    | SelectSingleProps<K>
    | SelectMultiselectProps<K>
    | SelectSingleNativeProps<K>
    | SelectMultiselectNativeProps<K>;

type SelectPrivateProps = {
    /**
     * @private
     */
    _offset?: [number, number];
    /**
     * @private
     */
    _checkboxAppearance?: string;
};

export interface BasicProps<K extends ItemOption> {
    /**
     * Список элементов.
     */
    items: K[];
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
     * @default bottom
     */
    placement?: SelectPlacement | Array<SelectPlacementBasic>;
    /**
     * Компонент неактивен.
     * @default false
     */
    disabled?: boolean;
    /**
     * Компонент доступен только для чтения.
     */
    readOnly?: boolean;
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
    portal?: string | RefObject<HTMLElement>;
    /**
     * Callback для кастомной настройки значения в селекте.
     */
    renderValue?: (item: K) => string;
    /**
     * Callback для кастомной настройки айтема в выпадающем списке.
     */
    renderItem?: (item: K) => ReactNode;
    /**
     * Callback для кастомной настройки иконки выбранного элемента.
     */
    renderSelectionIcon?: (selected: boolean | SafeExtract<SelectCheckedState, 'indeterminate'>) => ReactNode;
    /**
     * Закрывать ли выпадающий список после выбора элемента.
     * @default если single, то true; если multiple, то false
     */
    closeAfterSelect?: boolean;
    /**
     * Ячейка для контента в начале выпадающего списка.
     */
    beforeList?: ReactNode;
    /**
     * Ячейка для контента в конце выпадающего списка.
     */
    afterList?: ReactNode;
    /**
     * Виртуализация в выпадающем списке.
     * Не поддерживается в многоуровневых списках.
     * @default false
     */
    virtual?: boolean;
    /**
     * Коллбэк, срабатывающий при скролле.
     */
    onScroll?: (e: UIEvent<HTMLElement>) => void;
    /**
     * Событие сворачивания/разворачивания выпадающего списка.
     */
    onToggle?: (isOpen: boolean) => void;
    /**
     * Режим работы взаимодействия с элементами.
     * - default: элемент можно выбрать и можно отменить его выбор.
     * - radio: если элемент выбран, то отменить его выбор нельзя. Только для single-режима.
     * @default default
     */
    mode?: 'default' | 'radio';
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
     * Текст выпадающего списка при пустом массиве items.
     */
    emptyStateDescription?: ReactNode;

    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Внешний вид чипа в варианте textfield-like multiselect.
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
}

export type SelectProps<K extends ItemOption = ItemOption> = BasicProps<K> &
    IsMultiselect<K> &
    Target &
    SelectPrivateProps &
    Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        'placeholder' | 'value' | 'onChange' | 'onResize' | 'onResizeCapture' | 'defaultValue' | 'onScroll'
    >;

export type ItemContext = {
    focusedPath: FocusedPathState;
    checked: ValueToCheckedMapType;
    multiselect: SelectProps['multiselect'];
    size: SelectProps['size'];
    handleCheckboxChange: (item: ItemOptionTransformed) => void;
    handleItemClick: (item: ItemOptionTransformed, e?: MouseEvent<HTMLElement>) => void;
    variant: SelectProps['variant'];
    renderItem: SelectProps['renderItem'];
    renderSelectionIcon: SelectProps['renderSelectionIcon'];
    treeId: string;
    treePath: TreePathState;
    dispatchTreePath: Dispatch<TreePathAction>;
    arrowPlacement: SelectProps['arrowPlacement'];
    valueToPathMap: Map<string, string[]>;
    singleLine: SelectProps['singleLine'];
    _checkboxAppearance?: SelectProps['_checkboxAppearance'];
};

export type FloatingPopoverProps = {
    target: ReactNode | ((ref: Ref<HTMLElement>) => ReactNode);
    children: ReactNode;
    opened: boolean;
    onToggle: (opened: boolean) => void;
    placement: NonNullable<SelectProps['placement']>;
    isInner: boolean;
    shift: SelectProps['shift'];
    flip: SelectProps['flip'];
    portal?: SelectProps['portal'];
    listWidth?: SelectProps['listWidth'];
    zIndex?: SelectProps['zIndex'];
    offset?: SelectProps['_offset'];
};
