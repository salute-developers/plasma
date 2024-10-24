/// <reference types="react" />
import { AccordionItem } from '@salutejs/plasma-new-hope/styled-components';
export declare const Accordion: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        clear: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    view?: string | undefined;
    size?: string | undefined;
    singleActive?: boolean | undefined;
    defaultActiveEventKey?: number[] | undefined;
    disabled?: boolean | undefined;
    stretching?: "filled" | "fixed" | undefined;
    onChange?: ((index?: number | undefined, value?: boolean | undefined) => void) | undefined;
    children?: import("react").ReactNode;
    className?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export { AccordionItem };
