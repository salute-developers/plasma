import type { ReactNode } from 'react';

import type { TextareaHTMLAttributes } from '../../types';
import type { PopoverPlacement, PopoverPlacementBasic } from '../Popover';

type Only<T, U, R, K> = {
    [P in keyof T]: T[P];
} &
    {
        [P in keyof U]?: never;
    } &
    {
        [P in keyof R]?: never;
    } &
    {
        [P in keyof K]?: never;
    };

type OneOf<T, U, R, K> = Only<T, U, R, K> | Only<U, T, R, K> | Only<R, T, U, K> | Only<K, R, T, U>;

type ClearProps = {
    /**
     * view применяется с clear-токенами
     */
    clear?: true;
    /**
     * отобразить ли divider
     */
    hasDivider?: boolean;
};

export type TextAreaPropsAutoResize = {
    /**
     * Автоматическая высота поля ввода.
     */
    autoResize?: boolean;
    /**
     * Максимальная высота поля ввода в автоматическом режиме (в абсолютных единицах).
     * @example maxAuto="5", maxAuto={5}
     */
    maxAuto?: number;
    /**
     * Минимальная высота поля ввода в автоматическом режиме (в абсолютных единицах).
     * @example minAuto="5", minAuto={5}
     */
    minAuto?: number;
};

export type TextAreaPropsHeightWidth = {
    /**
     * Высота текстового поля, значения в rem. Отвечает за ВСЮ высоту компонента.
     * @example height="10", height={10}
     */
    height?: number | string;
    /**
     * Ширина текстового поля, значения в rem. Отвечает за ВСЮ ширину компонента.
     * @example width="10", width={10}
     */
    width?: number | string;
};

export type TextAreaPropsRowsCols = {
    /**
     * Высота текстового поля (в абсолютных единицах) – фиксированное число отображаемых строк без прокрутки.
     */
    rows?: number;
    /**
     * Ширина текстового поля (в абсолютных единицах) – фиксированное число столбцов.
     */
    cols?: number;
};

export type TextAreaDimensionsProps = OneOf<
    TextAreaPropsAutoResize,
    TextAreaPropsHeightWidth,
    TextAreaPropsRowsCols,
    ClearProps
>;

type RequiredProps = {
    /**
     * Флаг обязательности поля
     */
    required?: boolean;
    /**
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredPlacement?: 'left' | 'right';
    /**
     * Флаг необязательности поля
     */
    optional?: boolean;
    /**
     * Флаг наличия индикатора обязательности поля
     * @default true
     */
    hasRequiredIndicator?: boolean;
};

type HintProps =
    | {
          /**
           * Текст тултипа
           */
          hintText: string;
          /**
           * Способ открытия тултипа - наведение или клик мышью
           */
          hintTrigger?: 'hover' | 'click';
          /**
           * Видимость тултипа
           */
          hintOpened?: boolean;
          /**
           * Вид тултипа
           */
          hintView?: string;
          /**
           * Размер тултипа
           */
          hintSize?: string;
          /**
           * Иконка, рядом с которым произойдет вызов всплывающего окна.
           * Если свойство не задано, применится иконка по умолчанию.
           */
          hintTargetIcon?: ReactNode;
          /**
           * Направление раскрытия тултипа.
           */
          hintPlacement?: PopoverPlacement | Array<PopoverPlacementBasic>;
          /**
           * Видимость стрелки (хвоста).
           */
          hintHasArrow?: boolean;
          /**
           * Отступ окна относительно элемента, у которого оно вызвано.
           * @default
           * [0, 8]
           */
          hintOffset?: [number, number];
          /**
           * Ширина окна (в rem).
           */
          hintWidth?: string;
          /**
           * Слот для контента слева, например `Icon`.
           */
          hintContentLeft?: ReactNode;
      }
    | {
          hintText?: never;
          hintOpened?: never;
          hintTrigger?: never;
          hintView?: never;
          hintSize?: never;
          hintTargetIcon?: never;
          hintPlacement?: never;
          hintHasArrow?: never;
          hintOffset?: never;
          hintWidth?: never;
          hintContentLeft?: never;
      };

export type TextAreaPropsBase = {
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
     * Метка-подпись к элементу справа.
     */
    titleCaption?: ReactNode;
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
     * Вспомогательный текст снизу слева для поля ввода.
     * @deprecated свойство устарело, необходимо использовать `leftHelper`.
     */
    helperText?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    leftHelper?: ReactNode;
    /**
     * Вспомогательный текст снизу справа для поля ввода.
     */
    rightHelper?: ReactNode;
    /**
     * Расположение вспомогательного текста слева
     * @default 'inner'
     */
    leftHelperPlacement?: 'inner' | 'outer';
} & RequiredProps &
    HintProps;

type TextAreaPropsExtends = TextAreaPropsBase & {
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     */
    view?: string;
};

export type TextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows' | 'cols' | 'required'> &
    TextAreaPropsExtends &
    TextAreaDimensionsProps;

export type TextAreaRootProps = {
    size?: string;
    view?: string;
    hintView?: string;
    hintSize?: string;
    clear?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows' | 'cols' | 'required'>;
