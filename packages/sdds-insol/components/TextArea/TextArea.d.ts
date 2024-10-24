/// <reference types="react" />
/**
 * Поле ввода многострочного текста.
 */
export declare const TextArea: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    size: {
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        primary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintOpened?: boolean | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    autoResize?: boolean | undefined;
    maxAuto?: number | undefined;
    minAuto?: number | undefined;
} & {
    height?: undefined;
    width?: undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintOpened?: boolean | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintOpened?: boolean | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    rows?: number | undefined;
    cols?: number | undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    height?: undefined;
    width?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintOpened?: boolean | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    clear?: true | undefined;
    hasDivider?: boolean | undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    height?: undefined;
    width?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    hintText?: undefined;
    hintOpened?: undefined;
    hintTrigger?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    autoResize?: boolean | undefined;
    maxAuto?: number | undefined;
    minAuto?: number | undefined;
} & {
    height?: undefined;
    width?: undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    hintText?: undefined;
    hintOpened?: undefined;
    hintTrigger?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    hintText?: undefined;
    hintOpened?: undefined;
    hintTrigger?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    rows?: number | undefined;
    cols?: number | undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    height?: undefined;
    width?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    hintText?: undefined;
    hintOpened?: undefined;
    hintTrigger?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    clear?: true | undefined;
    hasDivider?: boolean | undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    height?: undefined;
    width?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintOpened?: boolean | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    autoResize?: boolean | undefined;
    maxAuto?: number | undefined;
    minAuto?: number | undefined;
} & {
    height?: undefined;
    width?: undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintOpened?: boolean | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintOpened?: boolean | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    rows?: number | undefined;
    cols?: number | undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    height?: undefined;
    width?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintOpened?: boolean | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    clear?: true | undefined;
    hasDivider?: boolean | undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    height?: undefined;
    width?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    hintText?: undefined;
    hintOpened?: undefined;
    hintTrigger?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    autoResize?: boolean | undefined;
    maxAuto?: number | undefined;
    minAuto?: number | undefined;
} & {
    height?: undefined;
    width?: undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    hintText?: undefined;
    hintOpened?: undefined;
    hintTrigger?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    hintText?: undefined;
    hintOpened?: undefined;
    hintTrigger?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    rows?: number | undefined;
    cols?: number | undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    height?: undefined;
    width?: undefined;
} & {
    clear?: undefined;
    hasDivider?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>) | (Omit<import("@salutejs/plasma-new-hope/types/types").TextareaHTMLAttributes<HTMLTextAreaElement>, "required" | "rows" | "cols"> & {
    status?: "" | "warning" | "success" | "error" | undefined;
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
    helperText?: string | undefined;
    leftHelper?: string | undefined;
    rightHelper?: string | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    hintText?: undefined;
    hintOpened?: undefined;
    hintTrigger?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    size?: string | undefined;
    view?: string | undefined;
} & {
    clear?: true | undefined;
    hasDivider?: boolean | undefined;
} & {
    rows?: undefined;
    cols?: undefined;
} & {
    autoResize?: undefined;
    maxAuto?: undefined;
    minAuto?: undefined;
} & {
    height?: undefined;
    width?: undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>))>;
