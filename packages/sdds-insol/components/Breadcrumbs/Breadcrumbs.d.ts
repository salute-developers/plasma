/// <reference types="react" />
/**
 * Breadcrumbs
 */
export declare const Breadcrumbs: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("react").HTMLAttributes<HTMLDivElement> & {
    view?: string | undefined;
    size?: string | undefined;
    separator?: import("react").ReactNode;
    items: import("@salutejs/plasma-new-hope/types/components/Breadcrumbs/Breadcrumbs.types").BreadcrumbsItem[];
    showItems?: number | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
