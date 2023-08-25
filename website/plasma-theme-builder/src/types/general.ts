import { general as generalColors, PlasmaSaturation } from '@salutejs/plasma-colors';
import { Grayscale } from '@salutejs/plasma-tokens-utils';

import type { Swift, XML, Theme as ThemeType } from '.';

export type ComplexValue = string | Record<string, string> | MultiplatformValue | Array<MultiplatformValue>;

export type GeneralColor = keyof typeof generalColors;

export interface TokenValue {
    value: ComplexValue;
    comment?: string;
    enabled?: boolean;
}

export interface ThemeData {
    themeName: string;
    accentColors: GeneralColor;
    lightSaturations: PlasmaSaturation;
    darkSaturations: PlasmaSaturation;
    lightGrayscale: Grayscale;
    darkGrayscale: Grayscale;
    opacityIcons: boolean;
    opacitySurfaces: boolean;
}

export interface MultiplatformValue {
    origin: string;
    swift?: Swift;
    xml?: XML;
    backgroundColor?: string;
}

export interface InputDataCommon {
    value: string;
    status?: 'error';
    helpText?: string;
}

export type InputDataValue = Omit<InputDataCommon, 'value'> & { value: ComplexValue };

export type InputDataComment = Partial<InputDataCommon>;

export type InputDataEnabled = Omit<InputDataCommon, 'value'> & { value?: boolean };

export interface InputData {
    section: InputDataCommon;
    subsection: InputDataCommon;
    name: InputDataCommon;
    value: InputDataValue;
    comment?: InputDataComment;
    enabled?: InputDataEnabled;
}

export interface GetGreyTokenDataParams {
    saturation: PlasmaSaturation | 50;
    grayscale: Grayscale;
    opacity?: number | null;
}

export interface TokenContextHandlers {
    onOpenTokenForm: (data: InputData) => void;
    onTokenDelete: (data: InputData) => void;
    onTokenEnabled: (data: InputData) => void;
    onTokensSubsectionEnabled: (data: InputData) => void;
    onTokensSectionEnabled: (data: InputData) => void;
    defaultData?: ThemeType;
}

export interface SavedTheme {
    themeData: ThemeType;
    date: string;
    branchName?: string;
}
