import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

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
     * @internal
     */
    appearance?: string;
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
     * Компонент c округлым border-radius
     * @default
     * false
     */
    pilled?: boolean;
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
    /**
     * @deprecated Используйте `appearance="clear"`
     */
    clear?: boolean;
    /**
     * @deprecated Используйте `appearance="transparent"`
     */
    transparent?: boolean;
} & IconContentProps;

export type BadgeProps = HTMLAttributes<HTMLDivElement> & CustomBadgeProps;
export type BadgeRootProps = HTMLAttributes<HTMLDivElement> &
    CustomBadgeProps & {
        pilled?: boolean;
        transparent?: boolean;
        clear?: boolean;
    };
