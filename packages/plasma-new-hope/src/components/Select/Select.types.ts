import type { CSSProperties, ButtonHTMLAttributes, SyntheticEvent, ChangeEventHandler } from 'react';
import React from 'react';

import type { RequiredProps, LabelProps, HintProps } from '../TextField/TextField.types';
import { DropdownProps } from '../Dropdown/Dropdown.types';

import { FocusedPathState } from './reducers';
import {
    ItemOption,
    MergedDropdownNode as DropdownNode,
    MergedDropdownNodeTransformed,
} from './ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from './hooks/usePathMaps';

export type SelectPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type SelectPlacement = 'top' | 'bottom' | 'right' | 'left' | 'auto';

export type { RequiredProps };

type Target = LabelProps &
    (
        | (RequiredProps &
              HintProps & {
                  /**
                   * Стиль селекта: button-like или textfield-like.
                   * @default textfield-like
                   */
                  target?: 'textfield-like';
                  view?: 'default' | 'positive' | 'warning' | 'negative';
                  /**
                   * Слот для контента слева.
                   */
                  contentLeft?: React.ReactNode;
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
                   */
                  chipType?: 'default' | 'text';
              })
        | {
              target: 'button-like';
              view?:
                  | 'default'
                  | 'accent'
                  | 'secondary'
                  | 'clear'
                  | 'positive'
                  | 'warning'
                  | 'negative'
                  | 'dark'
                  | 'black'
                  | 'white';
              contentLeft?: never;
              placeholder?: never;
              helperText?: never;
              chipType?: never;
          }
    );

type IsMultiselect<K extends ItemOption> =
    | ({ name?: never; defaultValue?: never } & (
          | {
                multiselect?: false;
                value?: string;
                onChange?: (value: string, item: K | null) => void;
                /**
                 * Если включено - будет выведено общее количество выбранных элементов вместо перечисления.
                 * @default false
                 */
                isTargetAmount?: never | false;
                /**
                 * Callback для кастомной настройки значения в селекте.
                 */
                renderTarget?: (value: K, opened?: boolean) => React.ReactNode;
            }
          | {
                multiselect: true;
                value?: Array<string>;
                onChange?: (value: string[], item: K | null) => void;
                isTargetAmount?: true;
                renderTarget?: (value: K[], opened?: boolean) => React.ReactNode;
            }
      ))
    | ({ name: string; onChange?: ChangeEventHandler } & (
          | {
                multiselect?: false;
                defaultValue?: string;
                value?: never;
                isTargetAmount?: never | false;
                renderTarget?: (value: K, opened?: boolean) => React.ReactNode;
            }
          | {
                multiselect: true;
                defaultValue?: Array<string>;
                value?: never;
                isTargetAmount?: true;
                renderTarget?: (value: K[], opened?: boolean) => React.ReactNode;
            }
      ));

export interface BasicProps<K extends ItemOption> {
    /**
     * Список элементов.
     */
    items: K[];
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
     * Вариант: обычный или сжатый
     * @default normal
     */
    variant?: 'normal' | 'tight';
    /**
     * CSS-свойство z-index для выпадающего списка.
     */
    zIndex?: CSSProperties['zIndex'];
    /**
     * Значение css overflow для выпадающего меню.
     */
    listOverflow?: CSSProperties['overflow'];
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
    portal?: string | React.RefObject<HTMLElement>;
    /**
     * Callback для кастомной настройки значения в селекте.
     */
    renderValue?: (item: K) => string;
    /**
     * Callback для кастомной настройки айтема в выпадающем списке.
     */
    renderItem?: (item: K) => React.ReactNode;
    /**
     * Закрывать ли выпадающий список после выбора элемента.
     * @default если single, то true; если multiple, то false
     */
    closeAfterSelect?: boolean;
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
     * Коллбэк, срабатывающий при скролле.
     */
    onScroll?: (e: React.UIEvent<HTMLUListElement>) => void;

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
     * @deprecated
     */
    listHeight?: CSSProperties['height'];
    /**
     * Коллбэк для определения достижения скроллом конца списка.
     * @deprecated
     */
    onScrollBottom?: (e: React.UIEvent<HTMLUListElement>) => void;
}

// Тип нового селекта
export type SelectProps<K extends ItemOption = ItemOption> = BasicProps<K> &
    IsMultiselect<K> &
    Target &
    Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        'value' | 'onChange' | 'onResize' | 'onResizeCapture' | 'nonce' | 'name' | 'defaultValue'
    >;

export type { ItemOption as ItemOptionSelect };

export type ItemContext = {
    focusedPath: FocusedPathState;
    checked: ValueToCheckedMapType;
    multiselect: MergedSelectProps['multiselect'];
    size: MergedSelectProps['size'];
    handleCheckboxChange: (item: MergedDropdownNodeTransformed) => void;
    handleItemClick: (item: MergedDropdownNodeTransformed, e: React.MouseEvent<HTMLElement>) => void;
    variant: MergedSelectProps['variant'];
    renderItem: MergedSelectProps['renderItem'];
    treeId: string;
};

// Тип старого селекта
export type SelectPropsOld<T = any> = (
    | {
          multiselect?: false;
          separator?: never;
      }
    | {
          multiselect?: true;
          separator?: string;
      }
) & {
    value: T;
    onChange?: (value: T) => void;
    listOverflow?: CSSProperties['overflow'];
    listHeight?: number | CSSProperties['height'];
    status?: 'success' | 'warning' | 'error';
    placeholder?: string;
    helperText?: string;
    disabled?: boolean;
    items?: DropdownNodeOld[];
    onItemSelect?: any;
    hasItems?: boolean;
    children?: never;
    isOpen?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange' | 'onResize' | 'onResizeCapture' | 'nonce'>;

type DropdownNodeOld = {
    value: string | number;
    label: string;
    items?: DropdownNodeOld[];
    isActive?: boolean;
    isDisabled?: boolean;
    color?: string;
    contentLeft?: React.ReactNode;
};

// Тип, объединенный для старого и нового селекта для поддержки обратной совместимости.
// В plasma-2.0 удалим MergedSelectProps и оставим только SelectProps.
export type DefaultValueType = string | number | Array<string | number>;

export type MergedSelectProps<T = any, K extends DropdownNode = DropdownNode> = Target &
    (
        | {
              multiselect?: false;
              separator?: never;
          }
        | {
              multiselect?: true;
              separator?: string;
          }
    ) & {
        value?: T;
        onChange?: (value: T, item: K | null) => void;
        /**
         * Placeholder.
         */
        placeholder?: string;
        /**
         * Вспомогательный текст снизу слева для поля ввода.
         */
        helperText?: string;
        /**
         * Компонент неактивен.
         * @default false
         */
        disabled?: boolean;
        /**
         * Список элементов.
         */
        items?: K[];
        onItemSelect?: (e: K, event: SyntheticEvent) => void;

        children?: never;
        /**
         * Если включено - будет выведено общее количество выбранных элементов вместо перечисления.
         * @default false
         */
        isTargetAmount?: boolean;
        /**
         * Callback для кастомной настройки таргета целиком.
         */
        renderTarget?: (item: K | K[], opened?: boolean) => React.ReactNode;
        /**
         * Сторона открытия дропдауна относительно target элемента.
         * @default bottom
         */
        placement?: SelectPlacement | Array<SelectPlacementBasic>;

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
         * Значение css overflow для выпадающего меню.
         */
        listOverflow?: CSSProperties['overflow'];
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
        portal?: string | React.RefObject<HTMLElement>;
        /**
         * Callback для кастомной настройки значения в селекте.
         */
        renderValue?: (item: K) => string;
        /**
         * Callback для кастомной настройки айтема в выпадающем списке.
         */
        renderItem?: (item: K) => React.ReactNode;
        /**
         * Закрывать ли выпадающий список после выбора элемента.
         * @default если single, то true; если multiple, то false
         */
        closeAfterSelect?: boolean;
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
         * Коллбэк, срабатывающий при скролле.
         */
        onScroll?: (e: React.UIEvent<HTMLUListElement>) => void;

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
         * @deprecated
         */
        status?: 'success' | 'warning' | 'error';
        /**
         * @deprecated
         */
        hasItems?: boolean;
        /**
         * @deprecated
         */
        isOpen?: boolean;
        /**
         * @deprecated
         */
        listHeight?: CSSProperties['height'];
        /**
         * Коллбэк для определения достижения скроллом конца списка.
         * @deprecated
         */
        onScrollBottom?: (e: React.UIEvent<HTMLUListElement>) => void;
    } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange' | 'onResize' | 'onResizeCapture' | 'nonce'>;

export type { DropdownNode as DropdownNodeSelect };

export type FloatingPopoverProps = {
    target: React.ReactNode | ((ref: React.MutableRefObject<HTMLElement | null>) => React.ReactNode);
    children: React.ReactNode;
    opened: boolean;
    onToggle: (opened: boolean) => void;
    placement: NonNullable<MergedSelectProps['placement']>;
    portal?: MergedSelectProps['portal'];
    listWidth?: MergedSelectProps['listWidth'];
    offset?: number;
    zIndex?: DropdownProps['zIndex'];
};
