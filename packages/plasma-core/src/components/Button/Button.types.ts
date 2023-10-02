import type { FlattenSimpleInterpolation, CSSObject } from 'styled-components';

import type { DisabledProps, FocusProps, OutlinedProps, blurs } from '../../mixins';
import type { ShiftProps, AsProps } from '../../types';
import type { PinProps } from '../../utils';

import { buttonSizes, buttonViews } from './Button.props';

/**
 * Основной интерфейс для создания компонента Button,
 * использовать для расширения внутри пакетов.
 */
export interface ButtonProps<T = HTMLElement>
    extends Partial<PinProps>,
        FocusProps,
        OutlinedProps,
        DisabledProps,
        ShiftProps,
        AsProps,
        Omit<React.AnchorHTMLAttributes<T>, 'type'>,
        React.ButtonHTMLAttributes<T> {
    /**
     * Квадратная кнопка (со сторанами 1:1)
     */
    square?: boolean;
    /**
     * Растягиваемость кнопки (кнопка занимает ширину контейнера)
     */
    stretch?: boolean;

    /**
     * Степень размытия фона
     * @deprecated для кнопок без прозрачности не работает
     */
    blur?: keyof typeof blurs;
}

/**
 * Размеры кнопки
 */
export interface ButtonSizeProps<S = keyof typeof buttonSizes> {
    /**
     * Размер кнопки
     */
    size: S;
}

export interface ButtonViewProps<V = keyof typeof buttonViews> {
    /**
     * Вид кнопки.
     */
    view: V;
}

export type ButtonContentProps =
    /**
     * С текстом и/или контентом слева.
     */
    | {
          /**
           * Текстовая надпись на кнопке
           */
          text?: React.ReactNode;
          /**
           * Слот для контента слева, например `Icon`
           */
          contentLeft?: React.ReactNode;
          /**
           * Слот для контента справа, например `Icon`
           */
          contentRight?: never;
          /**
           * Кастомный контент кнопки.
           * При указании этого свойства `contentLeft`, `contentRight` и `text` не применяются.
           */
          children?: never;
          /**
           * Состояние кнопки контролирующее отображение лоадера.
           */
          isLoading?: boolean;
          /**
           * Кастомный лоадер для кнопки.
           */
          loader?: React.ReactNode;
      }
    /**
     * С текстом и/или контентом справа.
     */
    | {
          text?: React.ReactNode;
          contentLeft?: never;
          contentRight?: React.ReactNode;
          children?: never;
          isLoading?: boolean;
          loader?: React.ReactNode;
      }
    /**
     * Через ``children``.
     */
    | {
          text?: never;
          contentLeft?: never;
          contentRight?: never;
          children?: React.ReactNode;
          isLoading?: boolean;
          loader?: React.ReactNode;
      };

/**
 * @private
 */
export interface ButtonAllContentProps {
    text?: React.ReactNode;
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    children?: React.ReactNode;
    isLoading?: boolean;
    loader?: React.ReactNode;
}

/**
 * @private
 */
export interface ButtonIsContentProps {
    $isContentLeft?: boolean;
    $isContentRight?: boolean;
    $isLoading?: boolean;
}

/**
 * @private
 */
export interface ButtonIsLoading {
    $isLoading?: boolean;
}

/**
 * Интерфейс StyledButton, исключая такие пропсы, как: `text`, `children` и т.д.
 * @private
 */
export interface StyledButtonProps
    extends ButtonViewProps,
        ButtonSizeProps,
        PinProps,
        FocusProps,
        OutlinedProps,
        DisabledProps,
        ShiftProps,
        ButtonIsContentProps,
        Pick<ButtonProps, 'square' | 'stretch' | 'blur'> {}

/**
 * @private
 */
export interface ButtonSizes {
    [x: string]: {
        height: string | number;
        paddingY: string | number;
        paddingX: string | number;
        paddingContentX: string | number;
        paddingStretchX: string | number;
        radius: string;
        radiusCircle: string;
    };
}

/**
 * @private
 */
export interface ButtonTypography {
    [x: string]: CSSObject | FlattenSimpleInterpolation;
}
