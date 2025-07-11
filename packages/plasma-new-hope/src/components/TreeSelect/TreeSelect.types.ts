import React, { ChangeEventHandler, CSSProperties, HTMLAttributes, Key, ReactNode } from 'react';
import type { HintProps, LabelProps, RequiredProps } from 'src/components/TextField/TextField.types';
import { SelectPlacement, SelectPlacementBasic } from 'src/components/Select/Select.types';

export type TreeItem = {
    /**
     * Уникальный идентификатор элемента.
     */
    key: Key;
    /**
     * Заголовок элемента.
     */
    title?: ReactNode | ((data: TreeItem) => ReactNode);
    /**
     * Classname для текущего элемента.
     */
    className?: string;
    /**
     * Стиль для текущего элемента.
     */
    style?: CSSProperties;
    /**
     * Флаг выключения элемента.
     * @default false
     */
    disabled?: boolean;
    /**
     * Иконка для текущего элемента.
     */
    icon?: ReactNode;
    /**
     * Дочерние items.
     */
    children?: TreeItem[];
    /**
     * Контент справа.
     */
    contentRight?: ReactNode;
};

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
          }
    );

type IsMultiselect =
    | ({ name?: never; defaultValue?: never } & (
          | {
                multiselect?: false;
                value?: string;
                onChange?: (value: string) => void;
            }
          | {
                multiselect: true;
                value?: Array<string>;
                onChange?: (value: string[]) => void;
            }
      ))
    | ({ name: string; onChange?: ChangeEventHandler } & (
          | {
                multiselect?: false;
                defaultValue?: string;
                value?: never;
            }
          | {
                multiselect: true;
                defaultValue?: Array<string>;
                value?: never;
            }
      ));

export interface BasicProps {
    /**
     * Список элементов.
     */
    items: TreeItem[];
    /**
     * Сторона открытия выпадающего дерева относительно target элемента.
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
     * Высота дерева.
     */
    height?: number;
    /**
     * Высота item. Обязательное поле для включения виртуализации.
     */
    itemHeight?: number;
    /**
     * Сторона иконки раскрытия элемента.
     * @default left
     */
    arrowPlacement?: 'left' | 'right';
    /**
     * Флаг включения стиля на всю ширину для выбранного элемента.
     * @default false
     */
    fullWidthItemSelection?: boolean;
    /**
     * Флаг включения виртуализации в дерево со скроллом.
     * @default true
     */
    virtual?: boolean;
    /**
     * Портал для выпадающего списка. Принимает id контейнера или ref.
     */
    portal?: string | React.RefObject<HTMLElement>;
    /**
     * Закрывать ли выпадающий список после выбора элемента.
     * @default если single, то true; если multiple, то false
     */
    closeAfterSelect?: boolean;
    /**
     * Коллбэк, срабатывающий при скролле.
     */
    onScroll?: (e: React.UIEvent<HTMLUListElement>) => void;
    /**
     * Событие сворачивания/разворачивания выпадающего списка.
     */
    onToggle?: (isOpen: boolean) => void;
    /**
     * Коллбэк для рендера кастомного списка. Например, для EmptyState.
     */
    renderList?: (data?: any) => ReactNode;
    /**
     * Ячейка для контента в начале выпадающего списка.
     */
    beforeList?: React.ReactNode;
    /**
     * Ячейка для контента в конце выпадающего списка.
     */
    afterList?: React.ReactNode;
    /**
     * Размер дерева.
     */
    size?: string;
    /**
     * Вид дерева.
     */
    view?: string;
}

export type TreeSelectProps = BasicProps & IsMultiselect & Target & HTMLAttributes<HTMLElement>;
