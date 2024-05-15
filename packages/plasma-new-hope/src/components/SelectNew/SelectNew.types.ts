import type { CSSProperties, SyntheticEvent, ButtonHTMLAttributes } from 'react';

import { ItemOption } from './elements/Item/Item.props';

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

type BasicProps = {
    items: Array<ItemOption>;
    /**
     * Значение control.
     */
    value: any;
    /**
     * Обработчик изменения значения.
     */
    onChange?: (value: any) => void;

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
};

export type SelectNewProps = BasicProps &
    IsMultiselect &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onResize' | 'onResizeCapture' | 'nonce'>;
