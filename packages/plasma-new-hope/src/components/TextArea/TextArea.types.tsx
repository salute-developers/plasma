import { TextareaHTMLAttributes } from '../../types';

type Only<T, U, R> = {
    [P in keyof T]: T[P];
} &
    {
        [P in keyof U]?: never;
    } &
    {
        [P in keyof R]?: never;
    };

type OneOf<T, U, R> = Only<T, U, R> | Only<U, T, R> | Only<R, T, U>;

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

export type TextAreaDimensionsProps = OneOf<TextAreaPropsAutoResize, TextAreaPropsHeightWidth, TextAreaPropsRowsCols>;

type RequiredProps = {
    /**
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredPlacement?: 'left' | 'right';
} & (
    | {
          /**
           * Флаг обязательности поля
           */
          required: true;
          /**
           * Флаг необязательности поля
           */
          optional?: never | false;
      }
    | {
          /**
           * Флаг необязательности поля
           */
          optional?: true;
          /**
           * Флаг обязательности поля
           */
          required?: never | false;
      }
);

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
    leftHelper?: string;
    /**
     * Вспомогательный текст снизу справа для поля ввода.
     */
    rightHelper?: string;
} & RequiredProps;

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
