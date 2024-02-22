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
        clear: string;
        filled: string;
    };
    size: {
        xs: string;
        s: string;
        m: string;
        l: string;
    };
    disabled: {
        true: string;
    };
    pilled: {
        true: string;
    };
    filledBackground: {
        true: string;
    };
    stretch: {
        true: string;
    };
}> & import("react").HTMLAttributes<HTMLDivElement> & {
    selectionMode?: "multiple" | "single" | undefined;
    disabled?: boolean | undefined;
    stretch?: boolean | undefined;
    pilled?: boolean | undefined;
    filledBackground?: boolean | undefined;
    size?: string | undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Компонент сегмента.
 */
export declare const SegmentItem: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        clear: string;
        default: string;
        secondary: string;
    };
    size: {
        xs: string;
        s: string;
        m: string;
        l: string;
    };
    disabled: {
        true: string;
    };
    pilled: {
        true: string;
    };
}> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    value: string;
    id?: string | undefined;
    label?: import("react").ReactNode;
    pilled?: boolean | undefined;
    customHandleSelect?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    size?: string | undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLLabelElement>>;
