export type JSONSerializable =
    | { [key: string]: JSONSerializable }
    | Array<JSONSerializable>
    | string
    | number
    | boolean
    | null;
