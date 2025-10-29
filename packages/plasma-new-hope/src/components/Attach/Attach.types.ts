import type { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { ButtonProps } from '../Button/Button.types';
import { DropdownPlacement, DropdownTrigger } from '../Dropdown';

export type FileInfo = {
    extension: string;
    filenameWithoutExtension: string;
    cellContentLeft: ReactNode;
    isVisible?: boolean;
};

export type DropdownOptions = {
    /**
     * Dropdown открыт всегда.
     */
    alwaysOpened?: boolean;
    /**
     * Способ открытия Dropdown окна - наведение или клик мышью.
     * @default click
     */
    trigger?: DropdownTrigger;
    /**
     * Сторона открытия Dropdown относительно элемента, у которого оно вызвано.
     * @default bottom
     */
    placement?: DropdownPlacement;
    /**
     * Отступ Dropdown относительно элемента, у которого оно вызвано.
     * @default [0, 8]
     */
    offset?: [number, number];
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
     * Закрывать окно при нажатии вне области Dropdown.
     * @default true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Портал для выпадающего списка. Принимает id контейнера или ref.
     */
    portal?: string | React.RefObject<HTMLElement>;
    /**
     * CSS-свойство z-index для выпадающего списка.
     */
    zIndex?: CSSProperties['zIndex'];
};

type FlowProps =
    | {
          /**
           * Расположение элементов.
           * По умолчанию 'auto' – автоматический перенос элемента в случае нехватки ширины контейнера.
           * @default 'auto'
           */
          flow?: 'horizontal';
          /**
           * Возможность прикрепить один или несколько файлов.
           */
          multiple?: boolean;
          /**
           * Свойства для настройки выпадающего списка с прикрепленными файлами.
           */
          dropdownOptions?: DropdownOptions;
      }
    | {
          /**
           * Расположение элементов.
           * По умолчанию 'auto' – автоматический перенос элемента в случае нехватки ширины контейнера.
           * @default 'auto'
           */
          flow?: 'vertical' | 'auto';
          /**
           * Возможность прикрепить один или несколько файлов.
           */
          multiple?: boolean;
          /**
           * Свойства для настройки выпадающего списка с прикрепленными файлами.
           */
          dropdownOptions?: never;
      };

export type BaseAttachProps = {
    /**
     * Массив форматов файлов, которые могут быть прикреплены (см. HTML-атрибут 'accept' для 'input').
     */
    acceptedFileFormats?: string[];
    /**
     * Скрыть кнопку после выбора файла
     * @default false
     */
    hideButtonOnAttach?: boolean;
    /**
     * Отображать прикрепленный файл
     * @description Если `hideButtonOnAttach` установлен как `false`,
     * данное свойство будет всегда иметь значение `true`
     * @default true
     */
    hasAttachment?: boolean;
    /**
     * Вспомогательный текст снизу слева под кнопкой
     */
    helperText?: string;
    /**
     * Размер Attach
     */
    size?: string;
    /**
     * Вид Attach
     */
    view?: string;
    /**
     * Вид вспомогательного текста
     */
    helperTextView?: string;
    /**
     * Вид кастомной иконки слева
     */
    customIcon?: React.ReactNode;
    /**
     * Callback при удалении прикрепленного файла
     */
    onClear?: () => void;
} & FlowProps;

export type AttachButtonProps = (
    | {
          /**
           * Тип кнопки. 'button' – обычная кнопка. 'iconButton' – кнопка с иконкой.
           * @default 'button'
           */
          buttonType?: 'button';
      }
    | {
          buttonType?: 'iconButton';
          /**
           * Иконка
           */
          icon?: React.ReactNode;
      }
) &
    ButtonProps;

export type AttachProps = InputHTMLAttributes<HTMLInputElement> & ButtonProps & BaseAttachProps & AttachButtonProps;
