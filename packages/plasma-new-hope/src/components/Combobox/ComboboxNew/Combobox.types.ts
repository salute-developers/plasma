import type { CSSProperties, ButtonHTMLAttributes, ChangeEventHandler } from 'react';
import React from 'react';

import { RequiredProps, HintProps, LabelProps } from '../../TextField/TextField.types';
import { DropdownProps } from '../../Dropdown/Dropdown.types';

import { FocusedPathState } from './reducers';
import { ItemOption, ItemOptionTransformed } from './ui/Inner/ui/Item/Item.types';
import type { ValueToCheckedMapType } from './hooks/getPathMaps';

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

type IsMultiselect<T extends ItemOption = ItemOption> =
    | ({ name?: never; defaultValue?: never } & (
          | {
                multiple?: false;
                value?: string;
                onChange?: (value: string, item: T | null) => void;
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
                /**
                 * Callback для кастомной настройки значения в селекте.
                 */
                renderValue?: never;
            }
          | {
                multiple: true;
                value?: string[];
                onChange?: (value: string[], item: T | null) => void;
                isTargetAmount?: true;
                targetAmount?: number;
                renderValue?: (item: T) => string;
            }
      ))
    | ({ name: string; onChange?: ChangeEventHandler } & (
          | {
                multiple?: false;
                defaultValue?: string;
                value?: never;
                isTargetAmount?: never | false;
                targetAmount?: never;
                renderValue?: never;
            }
          | {
                multiple: true;
                defaultValue?: string[];
                value?: never;
                isTargetAmount?: true;
                targetAmount?: number;
                renderValue?: (item: T) => string;
            }
      ));

// type VS = (value: string) => void;
// type VSA = (value: string[]) => void;

// type IsMultiselect<T extends ItemOption = ItemOption> = {
//     name?: string;
//     multiple?: boolean;
//     value?: string | string[];
//     defaultValue?: string | string[];
//     onChange?: VS | VSA | ChangeEventHandler;
//     isTargetAmount?: boolean;
//     targetAmount?: number;
//     renderValue?: (item: T) => string;
// };

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
     * CSS-свойство z-index для выпадающего списка.
     */
    zIndex?: CSSProperties['zIndex'];
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
     * Обработчик изменения значения в строке поиска.
     */
    onChangeValue?: (value: string) => void;
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
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Текст для состояния когда нет результата.
     */
    emptyStateDescription?: string;
};

export type ComboboxProps<T extends ItemOption = ItemOption> = BasicProps<T> &
    LabelProps &
    ViewStateProps &
    IsMultiselect<T> &
    RequiredProps &
    HintProps &
    Omit<ButtonHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'name' | 'defaultValue'>;

export type FloatingPopoverProps = {
    target: React.ReactNode | ((ref: React.MutableRefObject<HTMLElement | null>) => React.ReactNode);
    children: React.ReactNode;
    opened: boolean;
    onToggle: (opened: boolean) => void;
    placement: Placement;
    portal?: ComboboxProps['portal'];
    listWidth?: ComboboxProps['listWidth'];
    offset?: number;
    zIndex?: DropdownProps['zIndex'];
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
