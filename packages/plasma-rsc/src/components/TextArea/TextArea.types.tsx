import { TextareaHTMLAttributes } from '@salutejs/plasma-core';

export interface TextAreaPropsBase {
    /**
     * Статус компонента: заполнен успешно / с предупреждением / с ошибкой.
     * @deprecated использовать вместо этого свойство `view`
     */
    status?: '' | 'success' | 'warning' | 'error';
    /**
     * Надпись лейбла.
     */
    label?: string;
    /**
     * Расположение лейбла.
     */
    labelPlacement?: 'inner' | 'outer';
    /**
     * Слот для контента справа.
     */
    contentRight?: React.ReactElement;
    /**
     * Изменение размера текстового поля.
     * @deprecated устаревшее свойство
     */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    /**
     * Высота текстового поля, значения в rem
     * @example height="10", height={10}
     */
    height?: number | string;
    /**
     * Ширина текстового поля, значения в rem
     * @example width="10", width={10}
     */
    width?: number | string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
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
}

export interface TextAreaPropsExtends extends TextAreaPropsBase {
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     */
    view?: string;
}

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaPropsExtends;
