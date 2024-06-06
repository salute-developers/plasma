export interface ComponentProp {
    type: {
        name: string;
        raw: string;
        value: any[];
    };
    defaultValue?: any;
    description?: string;
    required?: boolean;
    parent?: {
        name?: string;
        fileName?: string;
    };
}
export type ComponentProps = Record<string, ComponentProp>;
export interface ComponentDocgenInfo {
    props?: ComponentProps;
    description?: string;
}

export type DocgenInfo = Record<string, ComponentDocgenInfo>;
