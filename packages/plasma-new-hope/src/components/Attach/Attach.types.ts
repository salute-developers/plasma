import type { HTMLAttributes } from 'react';
import React from 'react';

import { ButtonProps } from '../Button/Button.types';

export type BaseAttachProps = {
    /**
     * Массив форматов файлов, которые могут быть прикреплены (см. HTML-атрибут 'accept' для 'input').
     */
    acceptedFileFormats?: string[];
    /**
     * Отображать прикрепленный файл
     * @default true
     */
    hasAttachment?: boolean;
    /**
     * Расположение элементов.
     * По умолчанию 'auto' – автоматический перенос элемента в случае нехватки ширины контейнера.
     * @default 'auto'
     */
    flow?: 'horizontal' | 'vertical' | 'auto';
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
};

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

export type AttachProps = HTMLAttributes<HTMLDivElement> & ButtonProps & BaseAttachProps & AttachButtonProps;
