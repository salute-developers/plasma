## API Report File for "@salutejs/caldera-online"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import { addFocus } from '@salutejs/plasma-new-hope/styled-components';
import { AnchorHTMLAttributes } from 'react';
import { AsProps } from '@salutejs/plasma-new-hope/types/types';
import { BaseboxProps } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL } from '@salutejs/caldera-online-themes/tokens';
import { bodyLBold } from '@salutejs/caldera-online-themes/tokens';
import { bodyM } from '@salutejs/caldera-online-themes/tokens';
import { bodyMBold } from '@salutejs/caldera-online-themes/tokens';
import { bodyS } from '@salutejs/caldera-online-themes/tokens';
import { bodySBold } from '@salutejs/caldera-online-themes/tokens';
import { bodyXS } from '@salutejs/caldera-online-themes/tokens';
import { bodyXSBold } from '@salutejs/caldera-online-themes/tokens';
import { bodyXXS } from '@salutejs/caldera-online-themes/tokens';
import { bodyXXSBold } from '@salutejs/caldera-online-themes/tokens';
import { BoldProps } from '@salutejs/plasma-new-hope/types/components/Typography/Typography.types';
import { ButtonHTMLAttributes } from 'react';
import { CheckboxProps as CheckboxProps_2 } from '@salutejs/plasma-new-hope/types/components/Checkbox/Checkbox.types';
import { ComponentProps } from 'react';
import { CustomToastProps } from '@salutejs/plasma-new-hope/types/components/Toast/Toast.types';
import { DropdownProps } from '@salutejs/plasma-new-hope/styled-components';
import { dsplL } from '@salutejs/caldera-online-themes/tokens';
import { dsplLBold } from '@salutejs/caldera-online-themes/tokens';
import { dsplM } from '@salutejs/caldera-online-themes/tokens';
import { dsplMBold } from '@salutejs/caldera-online-themes/tokens';
import { dsplS } from '@salutejs/caldera-online-themes/tokens';
import { dsplSBold } from '@salutejs/caldera-online-themes/tokens';
import { Filter } from '@salutejs/plasma-new-hope/types/engines/types';
import type { ForwardRefExoticComponent } from 'react';
import { FunctionComponent } from 'react';
import { h1 } from '@salutejs/caldera-online-themes/tokens';
import { h1Bold } from '@salutejs/caldera-online-themes/tokens';
import { h2 } from '@salutejs/caldera-online-themes/tokens';
import { h2Bold } from '@salutejs/caldera-online-themes/tokens';
import { h3 } from '@salutejs/caldera-online-themes/tokens';
import { h3Bold } from '@salutejs/caldera-online-themes/tokens';
import { h4 } from '@salutejs/caldera-online-themes/tokens';
import { h4Bold } from '@salutejs/caldera-online-themes/tokens';
import { h5 } from '@salutejs/caldera-online-themes/tokens';
import { h5Bold } from '@salutejs/caldera-online-themes/tokens';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from '@salutejs/plasma-new-hope/types/types';
import { LinkCustomProps } from '@salutejs/plasma-new-hope/types/components/Link/Link';
import { mediaQuery } from '@salutejs/plasma-new-hope/styled-components';
import { modalClasses } from '@salutejs/plasma-new-hope/styled-components';
import { ModalProps } from '@salutejs/plasma-new-hope/styled-components';
import { MouseEvent as MouseEvent_2 } from 'react';
import { PolymorphicClassName } from '@salutejs/plasma-new-hope/types/engines/types';
import { popupClasses } from '@salutejs/plasma-new-hope/styled-components';
import { PopupInfo } from '@salutejs/plasma-new-hope/styled-components';
import { PopupPlacement } from '@salutejs/plasma-new-hope/styled-components';
import { PopupProps } from '@salutejs/plasma-new-hope/styled-components';
import { PopupProvider } from '@salutejs/plasma-new-hope/styled-components';
import { PortalProps } from '@salutejs/plasma-new-hope/styled-components';
import { PropsType } from '@salutejs/plasma-new-hope/types/engines/types';
import { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { SegmentGroupProps } from '@salutejs/plasma-new-hope/styled-components';
import { SegmentItemProps } from '@salutejs/plasma-new-hope/styled-components';
import { SegmentProvider } from '@salutejs/plasma-new-hope/styled-components';
import { SegmentProviderProps } from '@salutejs/plasma-new-hope/styled-components';
import { sheetClasses } from '@salutejs/plasma-new-hope/styled-components';
import { SheetProps } from '@salutejs/plasma-new-hope/styled-components';
import { ShowToastArgs } from '@salutejs/plasma-new-hope/styled-components';
import { SpacingProps } from '@salutejs/plasma-new-hope/styled-components';
import { SSRProvider } from '@salutejs/plasma-new-hope/styled-components';
import { StyledComponent } from 'styled-components';
import { SwitchProps as SwitchProps_2 } from '@salutejs/plasma-new-hope/styled-components';
import { textL } from '@salutejs/caldera-online-themes/tokens';
import { textLBold } from '@salutejs/caldera-online-themes/tokens';
import { textM } from '@salutejs/caldera-online-themes/tokens';
import { textMBold } from '@salutejs/caldera-online-themes/tokens';
import { textS } from '@salutejs/caldera-online-themes/tokens';
import { textSBold } from '@salutejs/caldera-online-themes/tokens';
import { textXS } from '@salutejs/caldera-online-themes/tokens';
import { textXSBold } from '@salutejs/caldera-online-themes/tokens';
import { ToastPosition } from '@salutejs/plasma-new-hope/styled-components';
import { ToastProps } from '@salutejs/plasma-new-hope/styled-components';
import { ToastRole } from '@salutejs/plasma-new-hope/styled-components';
import { usePopupContext } from '@salutejs/plasma-new-hope/styled-components';
import { useSegment } from '@salutejs/plasma-new-hope/styled-components';
import { useToast } from '@salutejs/plasma-new-hope/styled-components';
import { Variants } from '@salutejs/plasma-new-hope/types/engines/types';

export { addFocus }

// @public (undocumented)
export const BodyL: FunctionComponent<PropsType<    {
size: {
l: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyL }

export { bodyLBold }

// @public (undocumented)
export const BodyM: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyM }

export { bodyMBold }

// @public (undocumented)
export const BodyS: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyS }

export { bodySBold }

// @public (undocumented)
export const BodyXS: FunctionComponent<PropsType<    {
size: {
xs: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyXS }

export { bodyXSBold }

// @public (undocumented)
export const BodyXXS: FunctionComponent<PropsType<    {
size: {
xxs: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyXXS }

export { bodyXXSBold }

// @public
export const Button: FunctionComponent<PropsType<    {
view: {
default: PolymorphicClassName;
primary: PolymorphicClassName;
accent: PolymorphicClassName;
secondary: PolymorphicClassName;
clear: PolymorphicClassName;
success: PolymorphicClassName;
warning: PolymorphicClassName;
critical: PolymorphicClassName;
dark: PolymorphicClassName;
black: PolymorphicClassName;
white: PolymorphicClassName;
};
size: {
l: PolymorphicClassName;
lr: PolymorphicClassName;
m: PolymorphicClassName;
mr: PolymorphicClassName;
s: PolymorphicClassName;
sr: PolymorphicClassName;
xs: PolymorphicClassName;
xsr: PolymorphicClassName;
xxs: PolymorphicClassName;
};
disabled: {
true: PolymorphicClassName;
};
focused: {
true: PolymorphicClassName;
};
stretching: {
auto: PolymorphicClassName;
filled: PolymorphicClassName;
fixed: PolymorphicClassName;
};
}> & ((Omit<ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<AnchorHTMLAttributes<HTMLElement>, "type"> & AsProps<any> & {
text?: string | undefined;
contentLeft?: ReactNode;
contentPlacing?: ("default" | "relaxed") | undefined;
isLoading?: boolean | undefined;
loader?: ReactNode;
stretch?: boolean | undefined;
stretching?: ("auto" | "filled" | "fixed") | undefined;
square?: boolean | undefined;
focused?: boolean | undefined;
disabled?: boolean | undefined;
pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
view?: string | undefined;
size?: string | undefined;
outlined?: boolean | undefined;
shiftLeft?: boolean | undefined;
shiftRight?: boolean | undefined;
blur?: "small" | "medium" | "large" | undefined;
} & {
value?: string | number | undefined;
contentRight?: undefined;
} & RefAttributes<HTMLButtonElement>) | (Omit<ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<AnchorHTMLAttributes<HTMLElement>, "type"> & AsProps<any> & {
text?: string | undefined;
contentLeft?: ReactNode;
contentPlacing?: ("default" | "relaxed") | undefined;
isLoading?: boolean | undefined;
loader?: ReactNode;
stretch?: boolean | undefined;
stretching?: ("auto" | "filled" | "fixed") | undefined;
square?: boolean | undefined;
focused?: boolean | undefined;
disabled?: boolean | undefined;
pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
view?: string | undefined;
size?: string | undefined;
outlined?: boolean | undefined;
shiftLeft?: boolean | undefined;
shiftRight?: boolean | undefined;
blur?: "small" | "medium" | "large" | undefined;
} & {
value?: undefined;
contentRight?: ReactNode;
} & RefAttributes<HTMLButtonElement>))>;

// Warning: (ae-forgotten-export) The symbol "ButtonComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type ButtonProps = typeof ButtonComponent;

// @public
export const Checkbox: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
m: PolymorphicClassName;
};
view: {
default: PolymorphicClassName;
primary: PolymorphicClassName;
secondary: PolymorphicClassName;
tertiary: PolymorphicClassName;
paragraph: PolymorphicClassName;
accent: PolymorphicClassName;
positive: PolymorphicClassName;
warning: PolymorphicClassName;
negative: PolymorphicClassName;
};
disabled: {
true: PolymorphicClassName;
};
focused: {
true: PolymorphicClassName;
};
}> & CheckboxProps_2 & RefAttributes<HTMLInputElement>>;

// Warning: (ae-forgotten-export) The symbol "CheckboxComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type CheckboxProps = ComponentProps<typeof CheckboxComponent>;

// @public (undocumented)
export const Dropdown: FunctionComponent<PropsType<    {
size: {
xs: PolymorphicClassName;
s: PolymorphicClassName;
m: PolymorphicClassName;
l: PolymorphicClassName;
};
view: {
default: PolymorphicClassName;
};
}> & DropdownProps & RefAttributes<HTMLDivElement>>;

export { DropdownProps }

// @public (undocumented)
export const DsplL: FunctionComponent<PropsType<    {
size: {
l: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { dsplL }

export { dsplLBold }

// @public (undocumented)
export const DsplM: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { dsplM }

export { dsplMBold }

// @public (undocumented)
export const DsplS: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { dsplS }

export { dsplSBold }

// @public (undocumented)
export const H1: FunctionComponent<PropsType<    {
size: {
h1: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h1 }

export { h1Bold }

// @public (undocumented)
export const H2: FunctionComponent<PropsType<    {
size: {
h2: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h2 }

export { h2Bold }

// @public (undocumented)
export const H3: FunctionComponent<PropsType<    {
size: {
h3: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h3 }

export { h3Bold }

// @public (undocumented)
export const H4: FunctionComponent<PropsType<    {
size: {
h4: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h4 }

export { h4Bold }

// @public (undocumented)
export const H5: FunctionComponent<PropsType<    {
size: {
h5: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h5 }

export { h5Bold }

// @public
export const Link: FunctionComponent<PropsType<    {
view: {
default: PolymorphicClassName;
primary: PolymorphicClassName;
secondary: PolymorphicClassName;
tertiary: PolymorphicClassName;
paragraph: PolymorphicClassName;
accent: PolymorphicClassName;
positive: PolymorphicClassName;
warning: PolymorphicClassName;
negative: PolymorphicClassName;
clear: PolymorphicClassName;
};
disabled: {
true: PolymorphicClassName;
};
focused: {
true: PolymorphicClassName;
};
}> & AnchorHTMLAttributes<HTMLAnchorElement> & LinkCustomProps & RefAttributes<HTMLAnchorElement>>;

// Warning: (ae-forgotten-export) The symbol "LinkComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type LinkProps = typeof LinkComponent;

export { mediaQuery }

// @public
export const Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>;

export { modalClasses }

export { ModalProps }

// @public
export const Popup: ForwardRefExoticComponent<PopupProps & RefAttributes<HTMLDivElement>>;

export { popupClasses }

export { PopupInfo }

export { PopupPlacement }

export { PopupProps }

export { PopupProvider }

// @public (undocumented)
export const Portal: FunctionComponent<PropsType<Variants> & PortalProps & RefAttributes<HTMLDivElement>>;

export { PortalProps }

// @public
export const Radiobox: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
m: PolymorphicClassName;
};
view: {
default: PolymorphicClassName;
primary: PolymorphicClassName;
secondary: PolymorphicClassName;
tertiary: PolymorphicClassName;
paragraph: PolymorphicClassName;
accent: PolymorphicClassName;
positive: PolymorphicClassName;
warning: PolymorphicClassName;
negative: PolymorphicClassName;
};
disabled: {
true: PolymorphicClassName;
};
focused: {
true: PolymorphicClassName;
};
}> & Filter<InputHTMLAttributes<HTMLInputElement>, "size"> & Omit<BaseboxProps, "indeterminate"> & RefAttributes<HTMLInputElement>>;

// Warning: (ae-forgotten-export) The symbol "RadioboxComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type RadioboxProps = ComponentProps<typeof RadioboxComponent>;

export { RadioGroup }

// @public
export const SegmentGroup: FunctionComponent<PropsType<    {
view: {
clear: PolymorphicClassName;
filled: PolymorphicClassName;
};
size: {
xs: PolymorphicClassName;
s: PolymorphicClassName;
m: PolymorphicClassName;
l: PolymorphicClassName;
};
disabled: {
true: PolymorphicClassName;
};
pilled: {
true: PolymorphicClassName;
};
filledBackground: {
true: PolymorphicClassName;
};
stretch: {
true: PolymorphicClassName;
};
}> & HTMLAttributes<HTMLDivElement> & {
selectionMode?: "multiple" | "single" | undefined;
disabled?: boolean | undefined;
stretch?: boolean | undefined;
pilled?: boolean | undefined;
filledBackground?: boolean | undefined;
size?: string | undefined;
view?: string | undefined;
} & RefAttributes<HTMLDivElement>>;

export { SegmentGroupProps }

// @public
export const SegmentItem: FunctionComponent<PropsType<    {
view: {
clear: PolymorphicClassName;
default: PolymorphicClassName;
secondary: PolymorphicClassName;
};
size: {
xs: PolymorphicClassName;
s: PolymorphicClassName;
m: PolymorphicClassName;
l: PolymorphicClassName;
};
disabled: {
true: PolymorphicClassName;
};
pilled: {
true: PolymorphicClassName;
};
}> & ButtonHTMLAttributes<HTMLButtonElement> & {
value: string;
id?: string | undefined;
label?: ReactNode;
pilled?: boolean | undefined;
customHandleSelect?: ((e: MouseEvent_2<HTMLButtonElement, MouseEvent>) => void) | undefined;
size?: string | undefined;
view?: string | undefined;
} & RefAttributes<HTMLLabelElement>>;

export { SegmentItemProps }

export { SegmentProvider }

export { SegmentProviderProps }

// @public
export const Sheet: FunctionComponent<PropsType<    {
view: {
default: PolymorphicClassName;
};
}> & SheetProps & RefAttributes<HTMLDivElement>>;

export { sheetClasses }

export { SheetProps }

export { ShowToastArgs }

// @public
export const Spinner: StyledComponent<FunctionComponent<PropsType<    {
view: {
default: PolymorphicClassName;
primary: PolymorphicClassName;
secondary: PolymorphicClassName;
tertiary: PolymorphicClassName;
paragraph: PolymorphicClassName;
accent: PolymorphicClassName;
positive: PolymorphicClassName;
warning: PolymorphicClassName;
negative: PolymorphicClassName;
};
}> & ((HTMLAttributes<HTMLDivElement> & {
width?: undefined;
height?: undefined;
size?: string | undefined;
view?: string | undefined;
} & RefAttributes<HTMLDivElement>) | (HTMLAttributes<HTMLDivElement> & {
width: number;
height: number;
size?: undefined; /**
* @deprecated
*/
view?: string | undefined;
} & RefAttributes<HTMLDivElement>) | (HTMLAttributes<HTMLDivElement> & {
width: string;
height: string;
size?: undefined;
view?: string | undefined;
} & RefAttributes<HTMLDivElement>))>, any, {}, never>;

// @public (undocumented)
export type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
    size?: string | number;
    view?: string;
    color?: string;
    deviceScale?: number;
};

export { SSRProvider }

// @public (undocumented)
export const Switch: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
view: {
default: PolymorphicClassName;
};
labelPosition: {
before: PolymorphicClassName;
after: PolymorphicClassName;
};
disabled: {
true: PolymorphicClassName;
};
focused: {
true: PolymorphicClassName;
};
}> & SwitchProps_2 & RefAttributes<HTMLInputElement>>;

// Warning: (ae-forgotten-export) The symbol "SwitchComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type SwitchProps = ComponentProps<typeof SwitchComponent>;

// @public (undocumented)
export const TextL: FunctionComponent<PropsType<    {
size: {
l: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { textL }

export { textLBold }

// @public (undocumented)
export const TextM: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { textM }

export { textMBold }

// @public (undocumented)
export const TextS: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { textS }

export { textSBold }

// @public (undocumented)
export const TextXS: FunctionComponent<PropsType<    {
size: {
xs: PolymorphicClassName;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { textXS }

export { textXSBold }

// @public (undocumented)
export const Toast: FunctionComponent<PropsType<    {
view: {
default: PolymorphicClassName;
primary: PolymorphicClassName;
dark: PolymorphicClassName;
light: PolymorphicClassName;
};
size: {
m: PolymorphicClassName;
};
pilled: {
true: PolymorphicClassName;
};
}> & HTMLAttributes<HTMLButtonElement> & CustomToastProps & RefAttributes<HTMLDivElement>>;

export { ToastPosition }

export { ToastProps }

// @public (undocumented)
export const ToastProvider: ({ children }: {
    children: ReactNode;
}) => JSX.Element;

export { ToastRole }

export { usePopupContext }

export { useSegment }

export { useToast }

// (No @packageDocumentation comment for this package)

```
