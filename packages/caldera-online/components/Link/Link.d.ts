/// <reference types="react" />
declare const LinkComponent: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        primary: string;
        secondary: string;
        tertiary: string;
        paragraph: string;
        accent: string;
        positive: string;
        warning: string;
        negative: string;
        clear: string;
    };
    disabled: {
        true: string;
    };
    focused: {
        true: string;
    };
}> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & import("@salutejs/plasma-new-hope/types/components/Link/Link").LinkCustomProps & import("react").RefAttributes<HTMLAnchorElement>>;
export declare type LinkProps = typeof LinkComponent;
/**
 * Ссылка.
 */
export declare const Link: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        primary: string;
        secondary: string;
        tertiary: string;
        paragraph: string;
        accent: string;
        positive: string;
        warning: string;
        negative: string;
        clear: string;
    };
    disabled: {
        true: string;
    };
    focused: {
        true: string;
    };
}> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & import("@salutejs/plasma-new-hope/types/components/Link/Link").LinkCustomProps & import("react").RefAttributes<HTMLAnchorElement>>;
export {};
