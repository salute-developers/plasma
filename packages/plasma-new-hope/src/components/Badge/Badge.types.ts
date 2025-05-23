import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type ClearViewProps =
    | {
          /**
           * view применяется с clear-токенами
           * @default
           * false
           */
          clear?: true;
          /**
           * Компонент c округлым border-radius
           * @default
           * false
           */
          pilled?: never;
          /**
           * view применяется с учетом прозрачности
           * @default
           * false
           */
          transparent?: never;
      }
    | {
          /**
           * Компонент c округлым border-radius
           */
          pilled?: boolean;
          /**
           * view применяется с учетом прозрачности
           */
          transparent?: boolean;
          /**
           * view применяется с clear-токенами
           */
          clear?: never;
      };

type IconContentProps =
    | {
          /**
           * Слот для контента слева, например `Icon`
           */
          contentLeft?: ReactNode;
          /**
           * Слот для контента справа, например `Icon`
           */
          contentRight?: never;
      }
    | {
          contentLeft?: never;
          contentRight?: ReactNode;
      };

export type CustomBadgeProps = {
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Пользовательский цвет текста и иконок
     */
    customColor?: string;
    /**
     * Пользовательский цвет фона
     */
    customBackgroundColor?: string;
    /**
     * Обрезает контент по максимальной ширине и добавляет ...
     * @default 'auto'
     */
    maxWidth?: CSSProperties['width'];
    /**
     * Размер Badge
     * @default
     * m
     */
    size?: string;
    /**
     * Вид Badge
     * @default
     * default
     */
    view?: string;
} & IconContentProps;

export type BadgeProps = HTMLAttributes<HTMLDivElement> & CustomBadgeProps & ClearViewProps;
export type BadgeRootProps = HTMLAttributes<HTMLDivElement> &
    CustomBadgeProps & {
        pilled?: boolean;
        transparent?: boolean;
        clear?: boolean;
    };
