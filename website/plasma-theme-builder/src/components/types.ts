import { general as generalColors, PlasmaSaturation } from '@salutejs/plasma-colors';

export interface TokenValue {
    value: string | Record<string, unknown>;
    comment?: string;
    enabled: boolean;
}

export type ThemeMode = 'light' | 'dark';

export type PageType = 'main' | 'generator' | 'theme' | 'error';

export type Grayscale = 'gray' | 'coolGray';

export type GeneralColor = keyof typeof generalColors;

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
