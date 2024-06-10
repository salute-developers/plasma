import type { CSSProperties, ButtonHTMLAttributes } from 'react';
import React from 'react';

import { FocusedPathState } from './reducers';
import { ItemOption, ItemOptionTransformed } from './elements/Inner/elements/Item/Item.types';
import type { ValueToCheckedMapType } from './hooks/usePathMaps';

export type SelectPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type SelectPlacement = SelectPlacementBasic | 'auto';

type Target =
    | {
          /**
           * Стиль селекта: button или textfield.
           * @default textfield
           */
          target?: 'textfield';
          view?: 'default' | 'positive' | 'warning' | 'negative';
          /**
           * Слот для контента слева.
           */
          contentLeft?: React.ReactElement;
          /**
           * Метка-подпись к элементу.
           */
          label?: string;
          /**
           * Расположение лейбла.
           * @default outer
           */
          labelPlacement?: 'outer' | 'inner';
          /**
           * Placeholder.
           */
          placeholder?: string;
          /**
           * Вспомогательный текст снизу слева для поля ввода.
           */
          helperText?: string;
      }
    | {
          target?: 'button';
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
          label?: never;
          labelPlacement?: never;
          placeholder?: never;
          helperText?: never;
      };

type IsMultiselect =
    | {
          value: string;
          onChange: (value: string) => void;
          /**
           * Разделитель выбранных значений.
           */
          separator?: never;
          /**
           * Если включено - будет выведено общее количество выбранных элементов вместо перечисления.
           * @default false
           */
          isTargetAmount?: never | false;
      }
    | {
          value: Array<string>;
          onChange: (value: Array<string>) => void;
          separator?: string;
          isTargetAmount?: boolean;
      };

export interface BasicProps {
    /**
     * Список элементов.
     */
    items: Array<ItemOption>;
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
     * Коллбэк для определения достижения скроллом конца списка.
     */
    onScrollBottom?: (e: React.UIEvent<HTMLUListElement>) => void;
    /**
     * Флаг лоадинга в конце списка.
     */
    isInfiniteLoading?: boolean;
    /**
     * Компонент выпадающего списка при пустом массиве items.
     */
    notFoundContent?: React.ReactElement;
    /**
     * Вариант: обычный или сжатый
     * @default normal
     */
    variant?: 'normal' | 'tight';
    /**
     * Значение css overflow для выпадающего меню.
     * @example listOverflow="scroll"
     */
    listOverflow?: CSSProperties['overflow'];
    /**
     * Значение css height для выпадающего меню.
     * @example listHeight="11", listHeight="auto", listHeight={11}
     */
    listHeight?: number | CSSProperties['height'];
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
     * Callback для кастомной настройки значения в селекте
     */
    renderValue?: (value: ItemOption['value'], label: ItemOption['label']) => string;

    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Внешний вид чипа в варианте textfield multiselect.
     */
    chipView?: string;

    /**
     * Выбор нескольких значений.
     * @deprecated Множественны выбор зависит от типа value и onChange.
     */
    multiselect?: boolean;
    /**
     * @default false
     * @deprecated
     */
    isOpen?: boolean;
    /**
     * Статус селекта.
     * @deprecated
     */
    status?: 'warning' | 'success' | 'error';
}

export type SelectProps = BasicProps &
    IsMultiselect &
    Target &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange' | 'onResize' | 'onResizeCapture' | 'nonce'>;

export type ItemContext = {
    focusedPath: FocusedPathState;
    checked: ValueToCheckedMapType;
    multiselect: boolean;
    size: SelectProps['size'];
    handleCheckboxChange: (item: ItemOptionTransformed) => void;
    handleItemClick: (item: ItemOptionTransformed, e: React.MouseEvent<HTMLElement>) => void;
    variant: SelectProps['variant'];
};
