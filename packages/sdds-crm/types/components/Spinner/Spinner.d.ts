import type { HTMLAttributes } from 'react';

export type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Размер спиннера
     */
    size?: string | number;
    /**
     * Цвет спиннера
     */
    view?: string;
    /**
     * Цвет спиннера
     * @deprecated
     */
    color?: string;
    /**
     * @deprecated
     */
    deviceScale?: number;
};
/**
 * Компонент для отображения индикатора загрузки.
 */
export declare const Spinner: import('styled-components').StyledComponent<
    import('react').FunctionComponent<
        import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
            view: {
                default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                tertiary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                paragraph: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            };
        }> &
            (
                | (HTMLAttributes<HTMLDivElement> & {
                      width?: never;
                      height?: never;
                      size?: string | number;
                      view?: string;
                  } & import('react').RefAttributes<HTMLDivElement>)
                | (HTMLAttributes<HTMLDivElement> & {
                      width: number;
                      height: number;
                      size?: never;
                      view?: string;
                  } & import('react').RefAttributes<HTMLDivElement>)
                | (HTMLAttributes<HTMLDivElement> & {
                      width: string;
                      height: string;
                      size?: never;
                      view?: string;
                  } & import('react').RefAttributes<HTMLDivElement>)
            )
    >,
    any,
    {},
    never
>;
