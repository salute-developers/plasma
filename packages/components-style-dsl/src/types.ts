export type StylePropertyKind =
    | 'value'
    | 'boolean'
    | 'integer'
    | 'float'
    | 'dimension'
    | 'color'
    | 'typography'
    | 'shape'
    | 'shadow'
    | 'icon'
    | 'component_style';

export interface StyleComponentSourceInfo {
    packageName: string;
}

export interface StyleApiCommonInfo {
    componentName: string;
    source: StyleComponentSourceInfo;
}

export interface StyleApiParam {
    paramName: string;
    type?: StylePropertyKind;
    id?: string;
    part?: string;
    state?: StyleApiState;
}

export interface StyleApiComponent extends StyleApiCommonInfo {
    params: StyleApiParam[];
}

export type StyleApiMeta = StyleApiComponent[];

export type TokenDictionary = Readonly<Record<string, string>>;

export type StyleApiState = 'hovered' | 'pressed' | 'focused' | 'disabled' | (string & {});
export type StyleTokenParts = Readonly<Record<string, string>>;
export type StyleTokenTarget = string | StyleTokenParts;

export interface StyleTokenStateMapping {
    state: StyleApiState;
    target: StyleTokenTarget;
}

export interface StyleTokenMapping {
    type: StylePropertyKind;
    target: StyleTokenTarget;
    states: readonly StyleTokenStateMapping[];
    state(state: StyleApiState, target: StyleTokenTarget): StyleTokenMapping;
}

export type StyleApiMapping = Readonly<Record<string, StyleTokenMapping>>;

export interface StyleTokenApiDeclaration {
    commonInfo: StyleApiCommonInfo;
    tokens: readonly TokenDictionary[];
    mapping: StyleApiMapping;
}
