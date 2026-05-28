import { ComponentProps } from 'react';

declare const CheckboxComponent: import('react').FunctionComponent<
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
        import('@salutejs/plasma-new-hope/types/components/Checkbox/Checkbox.types.js').CheckboxProps &
        import('react').RefAttributes<HTMLInputElement>
>;
export type CheckboxProps = ComponentProps<typeof CheckboxComponent>;
/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export declare const Checkbox: import('react').FunctionComponent<
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
        import('@salutejs/plasma-new-hope/types/components/Checkbox/Checkbox.types.js').CheckboxProps &
        import('react').RefAttributes<HTMLInputElement>
>;
export {};
