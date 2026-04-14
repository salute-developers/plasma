import React from 'react';
import { HTMLAttributesWithoutOnChange } from 'src/engines/types';

export type { ColorStop } from './lib/gradientParser';

export type PassedConfig = {
    barSize?: number;
    crossSize?: number;
    defaultColor?: string;
    defaultGradient?: string;
};

export type Config = Required<PassedConfig>;

export type ColorPickerProps = {
    onChange?: (value: string) => void;
    idSuffix?: string;
    value?: string;
    hideControls?: boolean;
    hideInputs?: boolean;
    hideOpacity?: boolean;
    hidePresets?: boolean;
    hideHue?: boolean;
    presets?: string[];
    hideEyeDrop?: boolean;
    hideAdvancedSliders?: boolean;
    hideColorGuide?: boolean;
    hideInputType?: boolean;
    hideColorTypeControls?: boolean;
    hideGradientType?: boolean;
    hideGradientAngle?: boolean;
    hideGradientStop?: boolean;
    hideGradientControls?: boolean;
    width?: number;
    height?: number;
    className?: string;
    locales?: LocalesProps;
    disableDarkMode?: boolean;
    disableLightMode?: boolean;
    hidePickerSquare?: boolean;
    showHexAlpha?: boolean;
    config?: PassedConfig;
    dropperButtonSlot?: (onClick: VoidFunction) => React.ReactNode;
    degreePickerSlot?: (props: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: number;
    }) => React.ReactElement;
    stopPickerSlot?: (props: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: number;
    }) => React.ReactElement;
    removeGradientStopSlot?: (props: { onRemove: () => void }) => React.ReactElement;
} & HTMLAttributesWithoutOnChange<HTMLElement>;

export type LocalesProps = {
    CONTROLS: ControlsProps;
};

type ControlsProps = {
    SOLID: string;
    GRADIENT: string;
};

export type ThemeProps = {
    light: ThemeMode;
    dark: ThemeMode;
};

export type ThemeMode = {
    color?: string;
    background?: string;
    highlights?: string;
    accent?: string;
};
