import type { CSSProperties, ButtonHTMLAttributes } from 'react';
import React from 'react';

import { RequiredProps, LabelProps } from '../../TextField/TextField.types';

import { FocusedPathState } from './reducers';
import { ItemOption, ItemOptionTransformed } from './ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from './hooks/getPathMaps';

type Placement =
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

type IsMultiselect<T extends ItemOption = ItemOption> =
    | {
          multiple?: false;
          value?: string;
          onChange?: (value: string) => void;
          /**
           * Если включено - будет выведено общее количество выбранных элементов вместо перечисления.
           * @default false
           */
          isTargetAmount?: never | false;
          /**
           * Ручная настройка количества выбранных элементов. Только при isTargetAmount === true.
           * @default undefined
           */
          targetAmount?: never;
          renderValue?: never;
      }
    | {
          multiple: true;
          value?: Array<string>;
          onChange?: (value: Array<string>) => void;
          isTargetAmount?: true;
          targetAmount?: number;
          /**
           * Callback для кастомной настройки значения в селекте.
           */
          renderValue?: (item: T) => string;
      };

type ViewStateProps =
    | {
          /**
           * Компонент доступен только для чтения.
           */
          readOnly?: boolean;
          /**
           * Компонент неактивен.
           */
          disabled?: true;
          /**
           * Дропдаун открыт всегда.
           */
          alwaysOpened?: false;
      }
    | {
          /**
           * Компонент доступен только для чтения.
           */
          readOnly?: true;
          /**
           * Компонент неактивен.
           */
          disabled?: boolean;
          /**
           * Дропдаун открыт всегда.
           */
          alwaysOpened?: false;
      }
    | {
          /**
           * Компонент доступен только для чтения.
           */
          readOnly?: false;
          /**
           * Компонент неактивен.
           */
          disabled?: false;
          /**
           * Дропдаун открыт всегда.
           */
          alwaysOpened?: true;
      };

type BasicProps<T extends ItemOption = ItemOption> = {
    /**
     * Список элементов.
     */
    items: Array<T>;
    /**
     * Сторона открытия дропдауна относительно target элемента.
     * @default bottom-start
     */
    placement?: Placement;
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
     * Слот для вспомогательного текста справа.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста слева.
     */
    textAfter?: string;
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
    // TODO: #1584
    /**
     * Значение css height для выпадающего меню.
     */
    listHeight?: CSSProperties['height'];
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
     * Callback для кастомной настройки айтема в выпадающем списке.
     */
    renderItem?: (item: T) => React.ReactNode;
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
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
};

export type ComboboxProps<T extends ItemOption = ItemOption> = BasicProps<T> &
    LabelProps &
    ViewStateProps &
    IsMultiselect<T> &
    RequiredProps &
    Omit<ButtonHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export type FloatingPopoverProps = {
    target: React.ReactNode | ((ref: React.MutableRefObject<HTMLElement | null>) => React.ReactNode);
    children: React.ReactNode;
    opened: boolean;
    onToggle: (opened: boolean) => void;
    placement: Placement;
    portal?: ComboboxProps['portal'];
    listWidth?: ComboboxProps['listWidth'];
    offset?: number;
};

export type ItemContext = {
    focusedPath: FocusedPathState;
    checked: ValueToCheckedMapType;
    multiple: ComboboxProps['multiple'];
    size: ComboboxProps['size'];
    handleCheckboxChange: (item: ItemOptionTransformed) => void;
    handleItemClick: (item: ItemOptionTransformed, e: React.MouseEvent<HTMLElement>) => void;
    variant: ComboboxProps['variant'];
    renderItem: ComboboxProps['renderItem'];
    treeId: string;
};
