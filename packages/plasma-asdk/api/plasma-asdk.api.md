## API Report File for "@salutejs/plasma-asdk"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import { AnchorHTMLAttributes } from 'react';
import { AsProps } from '@salutejs/plasma-new-hope/styled-components';
import { BaseboxProps } from '@salutejs/plasma-new-hope/styled-components';
import { BoldProps } from '@salutejs/plasma-new-hope/types/components/Typography/Typography.types';
import { ButtonHTMLAttributes } from 'react';
import { CheckboxProps as CheckboxProps_2 } from '@salutejs/plasma-new-hope/types/components/Checkbox/Checkbox.types';
import { ComponentProps } from 'react';
import { Filter } from '@salutejs/plasma-new-hope/types/engines/types';
import { FunctionComponent } from 'react';
import { HTMLAttributes } from 'react';
import { HtmlHTMLAttributes } from 'react';
import { ImageProps } from '@salutejs/plasma-new-hope';
import { InputHTMLAttributes } from '@salutejs/plasma-new-hope/styled-components';
import { LinkCustomProps } from '@salutejs/plasma-new-hope/types/components/Link/Link';
import { PolymorphicClassName } from '@salutejs/plasma-new-hope/types/engines/types';
import { PropsType } from '@salutejs/plasma-new-hope/types/engines/types';
import { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { SpacingProps } from '@salutejs/plasma-new-hope/styled-components';
import { SSRProvider } from '@salutejs/plasma-new-hope/styled-components';
import { StyledComponent } from 'styled-components';
import { SubtitleProps } from '@salutejs/plasma-new-hope/styled-components';
import { SwitchProps as SwitchProps_2 } from '@salutejs/plasma-new-hope/styled-components';
import { TypographyOldProps } from '@salutejs/plasma-new-hope/types/components/Typography/Old/TypographyOld';
import { Variants } from '@salutejs/plasma-new-hope/types/engines/types';

// @public (undocumented)
export const Body1: FunctionComponent<PropsType<    {
size: {
body1: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Body2: FunctionComponent<PropsType<    {
size: {
body2: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const BodyL: FunctionComponent<PropsType<    {
size: {
l: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const BodyM: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const BodyS: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const BodyXS: FunctionComponent<PropsType<    {
size: {
xs: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const BodyXXS: FunctionComponent<PropsType<    {
size: {
xxs: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

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
xl: PolymorphicClassName;
xlr: PolymorphicClassName;
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
stretching?: ("fixed" | "auto" | "filled") | undefined;
square?: boolean | undefined;
focused?: boolean | undefined;
disabled?: boolean | undefined;
pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
view?: string | undefined;
size?: string | undefined;
outlined?: boolean | undefined;
shiftLeft?: boolean | undefined;
shiftRight?: boolean | undefined;
blur?: "small" | "large" | "medium" | undefined;
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
stretching?: ("fixed" | "auto" | "filled") | undefined;
square?: boolean | undefined;
focused?: boolean | undefined;
disabled?: boolean | undefined;
pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
view?: string | undefined;
size?: string | undefined;
outlined?: boolean | undefined;
shiftLeft?: boolean | undefined;
shiftRight?: boolean | undefined;
blur?: "small" | "large" | "medium" | undefined;
} & {
value?: undefined;
contentRight?: ReactNode;
} & RefAttributes<HTMLButtonElement>))>;

// @public (undocumented)
export const Button1: FunctionComponent<PropsType<    {
size: {
button1: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Button2: FunctionComponent<PropsType<    {
size: {
button2: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// Warning: (ae-forgotten-export) The symbol "ButtonComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type ButtonProps = typeof ButtonComponent;

// @public (undocumented)
export const Caption: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public
export const Checkbox: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
m: PolymorphicClassName;
};
view: {
accent: PolymorphicClassName;
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
export const DsplL: FunctionComponent<PropsType<    {
size: {
l: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const DsplM: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const DsplS: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Footnote1: FunctionComponent<PropsType<    {
size: {
footnote1: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Footnote2: FunctionComponent<PropsType<    {
size: {
footnote2: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const H1: FunctionComponent<PropsType<    {
size: {
h1: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const H2: FunctionComponent<PropsType<    {
size: {
h2: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const H3: FunctionComponent<PropsType<    {
size: {
h3: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const H4: FunctionComponent<PropsType<    {
size: {
h4: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const H5: FunctionComponent<PropsType<    {
size: {
h5: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const HeaderArrow: FunctionComponent<PropsType<Variants> & ButtonHTMLAttributes<HTMLButtonElement> & {
arrow?: "back" | "minimize" | undefined;
iconSize?: "s" | "m" | "xxs" | "xs" | "l" | "xl" | "xxl" | undefined;
} & RefAttributes<HTMLDivElement>>;

// @public
export const HeaderContent: ({ children, ...rest }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

// Warning: (ae-forgotten-export) The symbol "HeaderLogoProps" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export const HeaderLogo: FunctionComponent<PropsType<Variants> & HeaderLogoProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const HeaderRoot: FunctionComponent<PropsType<    {
view: {
default: PolymorphicClassName;
primary: PolymorphicClassName;
};
size: {
l: PolymorphicClassName;
m: PolymorphicClassName;
s: PolymorphicClassName;
};
}> & HtmlHTMLAttributes<HTMLDivElement> & {
size?: string | undefined;
gradientColor?: string | undefined;
view?: string | undefined;
} & RefAttributes<HTMLDivElement>>;

// @public
export const HeaderTitle: ({ children, ...rest }: React_2.HTMLAttributes<HTMLDivElement>) => JSX.Element;

// @public (undocumented)
export const HeaderTitleWrapper: FunctionComponent<PropsType<Variants> & HTMLAttributes<HTMLDivElement> & {
label?: string | undefined;
title?: string | undefined;
subTitle?: string | undefined;
caption?: string | undefined;
children?: ReactNode;
withBigTitle?: boolean | undefined;
} & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Headline1: FunctionComponent<PropsType<    {
size: {
headline1: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Headline2: FunctionComponent<PropsType<    {
size: {
headline2: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Headline3: FunctionComponent<PropsType<    {
size: {
headline3: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Headline4: FunctionComponent<PropsType<    {
size: {
headline4: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Headline5: FunctionComponent<PropsType<    {
size: {
headline5: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public
export const Link: FunctionComponent<PropsType<    {
view: {
default: PolymorphicClassName;
primary: PolymorphicClassName;
};
disabled: {
true: PolymorphicClassName;
};
focused: {
true: PolymorphicClassName;
};
}> & AnchorHTMLAttributes<HTMLAnchorElement> & LinkCustomProps & RefAttributes<HTMLAnchorElement>>;

// @public (undocumented)
export const P1: FunctionComponent<PropsType<    {
size: {
paragraph1: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const P2: FunctionComponent<PropsType<    {
size: {
paragraph2: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// @public
export const Radiobox: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
m: PolymorphicClassName;
};
view: {
accent: PolymorphicClassName;
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
export const Spinner: StyledComponent<FunctionComponent<PropsType<    {
view: {
accent: PolymorphicClassName;
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
export const Subtitle: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & SubtitleProps & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Switch: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
toggleSize: {
l: PolymorphicClassName;
};
view: {
default: PolymorphicClassName;
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
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const TextM: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const TextS: FunctionComponent<PropsType<    {
size: {
s: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const TextXS: FunctionComponent<PropsType<    {
size: {
xs: PolymorphicClassName;
};
}> & {
noWrap?: boolean | undefined;
breakWord?: boolean | undefined;
color?: string | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

// @public (undocumented)
export const Underline: FunctionComponent<PropsType<    {
size: {
m: PolymorphicClassName;
};
}> & TypographyOldProps & RefAttributes<HTMLDivElement>>;

// (No @packageDocumentation comment for this package)

```
