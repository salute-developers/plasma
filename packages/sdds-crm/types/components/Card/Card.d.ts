import { CardContent, CardInnerContent } from '@salutejs/plasma-new-hope/styled-components';
/**
 * Компонент Card.
 */
export declare const Card: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> & {
        size?: string;
        view?: string;
        orientation?: 'horizontal' | 'vertical';
        selected?: boolean;
        backgroundType?: 'none' | 'solid';
    } & import('react').HTMLAttributes<HTMLDivElement> &
        import('react').RefAttributes<HTMLDivElement>
>;
export { CardContent, CardInnerContent };
