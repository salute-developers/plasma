import type { CSSProperties } from 'react';

import { FieldProps } from '../Field';
import { TextareaHTMLAttributes, TextareaResize } from '../../utils/types';

export interface BaseProps extends Omit<FieldProps, 'contentLeft'>, TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Изменение размера текстового поля.
     */
    resize?: TextareaResize;
    /**
     * Высота текстового поля, значения в rem
     * @example height="10", height={10}
     */
    height?: number | CSSProperties['height'];
    /**
     * Ширина текстового поля, значения в rem
     * @example width="10", width={10}
     */
    width?: number | CSSProperties['width'];
}

export interface TextAreaProps extends Omit<BaseProps, 'size'> {
    /**
     * @deprecated не используется в компоненте.
     */
    helperBlock?: React.ReactElement;
    /**
     * @deprecated свойство устарело, необходимо использовать `leftHelper`.
     */
    helperText?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    leftHelper?: string;
    /**
     * Вспомогательный текст снизу справа для поля ввода.
     */
    rightHelper?: string;
    /**
     * Возможные размеры компонента.
     */
    size?: 'l' | 'm' | 's' | 'xs';
    /**
     * Автоматическая высота поля ввода.
     */
    autoResize?: boolean;
    /**
     * Максимальная высота поля ввода в автоматическом режиме(в rem).
     */
    maxAuto?: number;
    /**
     * Минимальная высота поля ввода в автоматическом режиме(в rem).
     */
    minAuto?: number;
    /**
     * Расположение лейбла.
     */
    labelPlacement?: 'inner' | 'outer';
}
