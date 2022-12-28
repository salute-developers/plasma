import { general as generalColors, PlasmaSaturation } from '@salutejs/plasma-colors';
import { Grayscale } from '../builder/types';

export interface TokenValue {
    value: string | Record<string, unknown>;
    comment?: string;
    enabled?: boolean;
}

export type ThemeMode = 'light' | 'dark';

export type PageType = 'main' | 'generator' | 'theme' | 'error';

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

export interface InputData {
    section: {
        value: string;
    };
    subsection: {
        value: string;
    };
    name: {
        value: string;
        status?: 'error';
        helpText?: string;
    };
    value: {
        value: string;
        status?: 'error';
        helpText?: string;
    };
    comment?: {
        value?: string;
        status?: 'error';
        helpText?: string;
    };
    enabled?: {
        value?: boolean;
    };
}

export interface TokenContextHandlers {
    onOpenTokenForm: (data: InputData) => void;
    onTokenDelete: (data: InputData) => void;
    onTokenEnabled: (data: InputData) => void;
    onTokensSubsectionEnabled: (data: InputData) => void;
    onTokensSectionEnabled: (data: InputData) => void;
}
