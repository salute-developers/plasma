import { AccordionItem } from '@salutejs/plasma-new-hope/styled-components';

export declare const Accordion: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h2: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h3: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h4: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h5: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h6: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> & {
        view?: string;
        size?: string;
        singleActive?: boolean;
        defaultActiveEventKey?: number[];
        disabled?: boolean;
        stretching?: 'fixed' | 'filled';
        onChange?: (index?: number, value?: boolean) => void;
        children?: React.ReactNode;
        className?: string;
    } & import('react').RefAttributes<HTMLDivElement>
>;
export { AccordionItem };
