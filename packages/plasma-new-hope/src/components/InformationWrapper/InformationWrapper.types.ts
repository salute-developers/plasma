import type { HTMLAttributes, ReactNode } from 'react';

import type { PopoverPlacement, PopoverPlacementBasic } from '../Popover';

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

export type InformationWrapperProps = {
    /**
     * Флаг наличия индикатора обязательности поля
     */
    hasRequiredIndicator?: boolean;
    /**
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredIndicatorPlacement?: 'right' | 'left';
    /**
     * Флаг необязательности поля
     */
    optional?: boolean;
    /**
     * Подпись для указания необязательности поля
     */
    optionalText?: string;

    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Задает выравнивание метке-подписи к элементу
     * @default top
     */
    labelPlacement?: 'top' | 'left';
    /**
     * ID эелемента, к которому будет относиться подпись
     * @default top
     */
    labelHtmlFor?: string | undefined;
    /**
     * Метка-подпись к элементу справа
     */
    titleCaption?: ReactNode;
    /**
     * Вспомогательный текст снизу слева
     */
    leftHelper?: ReactNode;
    /**
     * Вспомогательный текст снизу справа
     */
    rightHelper?: ReactNode;

    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Компонент не активен
     */
    disabled?: boolean;
    /**
     * Компонент доступен только для чтения
     */
    readOnly?: boolean;
} & HintProps &
    HTMLAttributes<HTMLDivElement>;

export type InformationWrapperRootProps = {
    size?: string;
    view?: string;
    hintView?: string;
    hintSize?: string;
    labelPlacement?: string;
    disabled?: boolean;
    readOnly?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'size'>;
