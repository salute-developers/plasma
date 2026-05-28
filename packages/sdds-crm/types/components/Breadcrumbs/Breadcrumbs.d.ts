/**
 * Breadcrumbs
 */
export declare const Breadcrumbs: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('react').HTMLAttributes<HTMLDivElement> & {
            view?: string;
            size?: string;
            separator?: import('react').ReactNode;
            items: import('@salutejs/plasma-new-hope/types/components/Breadcrumbs/Breadcrumbs.types.js').BreadcrumbsItem[];
            showItems?: number;
        } & import('react').RefAttributes<HTMLDivElement>
>;
