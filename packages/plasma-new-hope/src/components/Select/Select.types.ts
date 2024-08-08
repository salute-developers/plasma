import type { CSSProperties, ButtonHTMLAttributes } from 'react';
import React from 'react';

import { FocusedPathState } from './reducers';
import { ItemOption, ItemOptionTransformed } from './ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from './hooks/usePathMaps';

export type SelectPlacementBasic = 'top' | 'bottom' | 'right' | 'left';
export type SelectPlacement = SelectPlacementBasic | 'auto';

type Target =
    | {
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
          target?: 'button-like';
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
          labelPlacement?: never;
          placeholder?: never;
          helperText?: never;
      };

type IsMultiselect =
    | {
          multiselect?: false;
          value?: string;
          onChange?: (value: string) => void;
          /**
           * Если включено - будет выведено общее количество выбранных элементов вместо перечисления.
           * @default false
           */
          isTargetAmount?: never | false;
          /**
           * Callback для кастомной настройки таргета целиком.
           */
          renderTarget?: (value: string) => React.ReactNode;
      }
    | {
          multiselect: true;
          value?: Array<string>;
          onChange?: (value: Array<string>) => void;
          isTargetAmount?: boolean;
          renderTarget?: (value: Array<string>) => React.ReactNode;
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
     * Метка-подпись к элементу.
     */
    label?: string;
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
     * Callback для кастомной настройки значения в селекте.
     */
    renderValue?: (value: ItemOption['value'], label: ItemOption['label']) => string;
    /**
     * Callback для кастомной настройки айтема в выпадающем списке.
     */
    renderItem?: (value: ItemOption['value'], label: ItemOption['label']) => React.ReactNode;

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
}

export type SelectProps = BasicProps &
    IsMultiselect &
    Target &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange' | 'onResize' | 'onResizeCapture' | 'nonce'>;

export type ItemContext = {
    focusedPath: FocusedPathState;
    checked: ValueToCheckedMapType;
    multiselect: SelectProps['multiselect'];
    size: SelectProps['size'];
    handleCheckboxChange: (item: ItemOptionTransformed) => void;
    handleItemClick: (item: ItemOptionTransformed, e: React.MouseEvent<HTMLElement>) => void;
    variant: SelectProps['variant'];
    renderItem: SelectProps['renderItem'];
};
