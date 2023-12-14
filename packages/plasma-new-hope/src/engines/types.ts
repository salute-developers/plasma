export type PolymorphicClassName = string;

export type CSSProperties = {
    [key: string]: string | number | CSSProperties;
};

export type CSS = (
    strings: TemplateStringsArray,
    ...exprs: Array<string | number | CSSProperties>
) => PolymorphicClassName;

export type RootProps<
    RefElement extends HTMLElement,
    Element extends React.HTMLAttributes<HTMLElement>
> = React.FunctionComponent<{ children?: React.ReactNode } & Element & React.RefAttributes<RefElement>>;

export type Variant = {
    css?: PolymorphicClassName;
    attrs?: boolean;
    true?: PolymorphicClassName;
} & Record<any, any>;

export type HTMLAnyAttributes = Record<string, any>;

export type HTMLTagList = string | React.ElementType;

export type Variants = Record<string, Variant>;

export type PropsType<J extends Variants = Variants> = {
    [L in keyof J]?: keyof J[L] extends 'true' ? boolean : keyof J[L];
};

export type Filter<T extends {} = {}, U extends string = string> = {
    [k in keyof T]: k extends U ? unknown : T[k];
};

export interface ComponentConfig<
    Tag extends HTMLTagList = React.ElementType,
    VariantList extends Variants = Variants,
    VariantsProps extends PropsType<VariantList> = {},
    LayoutProps extends React.HTMLAttributes<HTMLElement> | undefined = React.HTMLAttributes<HTMLElement>
> {
    name: string;
    layout: (Root: React.FunctionComponent) => (props: LayoutProps | VariantsProps) => React.ReactElement | null;
    tag: Tag;
    base: PolymorphicClassName;
    variations: VariantList;
    defaults: Partial<Record<string, string>>;
}
