/// <reference types="react" />
/**
 * Провайдер контекста для группы сегментов и хук для доступа к контексту.
 */
export { SegmentProvider, useSegment } from '@salutejs/plasma-new-hope/styled-components';
/**
 * Компонент группы сегментов.
 */
export declare const SegmentGroup: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        clear: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        filled: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    /**
     * Компонент сегмента.
     */
    size: {
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    pilled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    stretch: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    filledBackground: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    orientation: {
        vertical: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("@salutejs/plasma-new-hope/styled-components").SegmentGroupProps & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Компонент сегмента.
 */
export declare const SegmentItem: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        clear: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        secondary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    pilled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string;
    id?: string | undefined;
    label?: import("react").ReactNode;
    pilled?: boolean | undefined;
    customHandleSelect?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    size?: string | undefined;
    view?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLLabelElement>>;
