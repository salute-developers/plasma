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
     * Размер Attach
     */
    size?: string;
    /**
     * Вид Attach
     */
    view?: string;
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
