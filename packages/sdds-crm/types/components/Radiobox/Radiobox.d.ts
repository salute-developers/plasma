import { ComponentProps } from 'react';

declare const RadioboxComponent: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        size: {
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        view: {
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            tertiary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            paragraph: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        focused: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('@salutejs/plasma-new-hope/types/engines/types.js').Filter<
            import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
            'size'
        > &
        Omit<import('@salutejs/plasma-new-hope/styled-components').BaseboxProps, 'appearance' | 'indeterminate'> &
        import('react').RefAttributes<HTMLInputElement>
>;
export type RadioboxProps = ComponentProps<typeof RadioboxComponent>;
/**
 * Переключатель, или *радиокнопка*.
 */
export declare const Radiobox: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        size: {
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        view: {
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            tertiary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            paragraph: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        focused: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('@salutejs/plasma-new-hope/types/engines/types.js').Filter<
            import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
            'size'
        > &
        Omit<import('@salutejs/plasma-new-hope/styled-components').BaseboxProps, 'appearance' | 'indeterminate'> &
        import('react').RefAttributes<HTMLInputElement>
>;
export { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
