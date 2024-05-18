import type { CSSProperties, SyntheticEvent, ButtonHTMLAttributes } from 'react';

import { ItemOption } from './elements/Inner/elements/Item/Item.types';

type Target =
    | {
          target: 'button';
          view:
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
      }
    | {
          target: 'textfield';
          view: 'default' | 'positive' | 'warning' | 'negative';
          isLabelInner?: boolean;
      };

type IsMultiselect =
    | {
          /**
           * Выбор нескольких значений.
           */
          multiselect?: false;
          /**
           * Разделитель выбранных значений.
           */
          separator?: never;
      }
    | {
          /**
           * Выбор нескольких значений.
           */
          multiselect?: true;
          /**
           * Разделитель выбранных значений.
           */
          separator?: string;
      };

type BasicProps<T extends string | Array<string>> = {
    // ???
    items: Array<ItemOption>;
    /**
     * Значение control.
     */
    value: T;
    /**
     * Обработчик изменения значения.
     */
    onChange?: (value: T) => void;

    status?: 'warning' | 'success' | 'error';
    placeholder?: string;
    helperText?: string;
    disabled?: boolean;
    onItemSelect?: (item: ItemOption, event: SyntheticEvent) => void;
    isOpen?: boolean; // ????
    children?: never;

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
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;

    target?: 'button' | 'textfield';
    label?: string;
    targetView?: 'default' | 'amount';
};

export type SelectNewProps = Target &
    BasicProps &
    IsMultiselect &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onResize' | 'onResizeCapture' | 'nonce'>;
