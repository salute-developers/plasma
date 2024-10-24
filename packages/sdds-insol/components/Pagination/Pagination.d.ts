/// <reference types="react" />
/**
 * Пагинация
 */
export declare const Pagination: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        secondary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        clear: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    viewCurrentPage: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        secondary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        clear: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    type: {
        compact: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("@salutejs/plasma-new-hope/styled-components").PaginationProps & import("react").RefAttributes<HTMLDivElement>>;
