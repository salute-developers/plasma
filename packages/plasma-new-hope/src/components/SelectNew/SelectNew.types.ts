import type { CSSProperties, ButtonHTMLAttributes } from 'react';
import React from 'react';

import { FocusedPathState } from './reducers';
import { ItemOption, ItemOptionTransformed } from './elements/Inner/elements/Item/Item.types';
import type { ValueToCheckedMapType } from './hooks/usePathMaps';

type Target =
    | {
          /**
           * Стиль селекта: button или textfield.
           * @default textfield
           */
          target?: 'textfield' | never;
          view?: 'default' | 'positive' | 'warning' | 'negative';
          /**
           * Слот для контента слева.
           */
          contentLeft?: React.ReactElement;
      }
    | {
          target?: 'button' | never;
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
      };

type IsMultiselect =
    | {
          value: string;
          onChange: (value: string) => void;
          /**
           * Выбор нескольких значений.
           * @default false
           */
          multiselect?: false;
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
          multiselect?: true;
          separator?: string;
          isTargetAmount?: boolean;
      };

type BasicProps = {
    items: Array<ItemOption>;
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
     * @default false
     * @deprecated
     */
    isOpen?: boolean;
    /**
     * Значение css overflow для выпадающего меню.
     * @default initial
     * @deprecated
     * @example listOverflow="scroll"
     */
    listOverflow?: CSSProperties['overflow'];
    /**
     * Значение css height для выпадающего меню.
     * @default initial
     * @deprecated
     * @example listHeight="11", listHeight="auto", listHeight={11}
     */
    listHeight?: number | CSSProperties['height'];
    /**
     * Статус селекта.
     * @deprecated
     */
    status?: 'warning' | 'success' | 'error';
};

export type SelectNewProps = BasicProps &
    IsMultiselect &
    Target &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onChange' | 'onResize' | 'onResizeCapture' | 'nonce'>;

export type ItemContext = {
    focusedPath: FocusedPathState;
    checked: ValueToCheckedMapType;
    multiselect: SelectNewProps['multiselect'];
    size: SelectNewProps['size'];
    handleCheckboxChange: (item: ItemOptionTransformed) => void;
    handleItemClick: (item: ItemOptionTransformed, e: React.MouseEvent<HTMLElement>) => void;
};
