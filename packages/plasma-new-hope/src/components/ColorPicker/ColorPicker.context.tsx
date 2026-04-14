import tinycolor, { Instance as TinyColorInstance } from 'tinycolor2';
import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

import { ColorStop } from './lib/gradientParser';
import { getColorObj, getDetails, isUpperCase } from './lib/utils';
import { getColors } from './lib/formatters';
import { high, low } from './lib/colorStopFormatters';
import { Config, PassedConfig } from './ColorPicker.types';

type ColorHC = tinycolor.ColorFormats.RGBA & tinycolor.ColorFormats.HSV;

type Previous = {
    color?: string;
    gradient?: string;
};

export type PickerContextProps = {
    hc: ColorHC;
    config: Config;
    value: string;
    colors: ColorStop[];
    degrees: number;
    inputType: string;
    tinyColor: TinyColorInstance;
    isGradient: boolean;
    squareWidth: number;
    currentLeft: number;
    deletePoint: VoidFunction;
    squareHeight: number;
    setInputType: (value: string) => void;
    handleChange: (value: string) => void;
    currentColor: string;
    selectedColor: number;
    setHc: (value: ColorHC) => void;
    handleGradient: (color: string, left?: number) => void;
    createGradientStr: (colors: ColorStop[]) => void;
    previous: Previous;
    isDarkMode: boolean;
    pickerIdSuffix: string;
    showHexAlpha: boolean;
    hideOpacity?: boolean;
    gradientType?: string;
    onChange?: (value: string) => void;
    selectColor?: (index: number) => void;
};

type PickerContextWrapperProps = {
    value: string;
    squareWidth: number;
    squareHeight: number;
    isDarkMode: boolean;
    pickerIdSuffix: string;
    showHexAlpha: boolean;
    passedConfig: PassedConfig;
    hideOpacity?: boolean;
    onChange?: (value: string) => void;
};

const defaultConfig: Config = {
    barSize: 16,
    crossSize: 16,
    defaultColor: 'rgba(175, 51, 242, 1)',
    defaultGradient: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
};

const PickerContext = createContext<PickerContextProps | null>(null);

export default function PickerContextWrapper({
    value,
    children,
    onChange,
    isDarkMode,
    squareWidth,
    hideOpacity,
    showHexAlpha,
    squareHeight,
    passedConfig,
    pickerIdSuffix,
}: PropsWithChildren<PickerContextWrapperProps>) {
    const config = useMemo<Config>(
        () => ({
            barSize: passedConfig.barSize ?? defaultConfig.barSize,
            crossSize: passedConfig.crossSize ?? defaultConfig.crossSize,
            defaultColor: passedConfig.defaultColor ?? defaultConfig.defaultColor,
            defaultGradient: passedConfig.defaultGradient ?? defaultConfig.defaultGradient,
        }),
        [passedConfig],
    );

    const colors = getColors(value, config.defaultColor, config.defaultGradient);
    const { degrees, degreeStr, isGradient, gradientType } = getDetails(value);
    const { currentColor, currentLeft } = getColorObj(colors);

    const [inputType, setInputType] = useState('rgb');
    const [previous, setPrevious] = useState<Previous>({});

    const tinyColor = tinycolor(currentColor);
    const rgba = tinyColor.toRgb();
    const hsv = tinyColor.toHsv();

    const [hc, setHc] = useState<ColorHC>({ ...rgba, ...hsv });

    useEffect(() => {
        if (hsv.s === 0) {
            setHc((prev) => ({ ...rgba, ...hsv, h: prev.h }));
        } else {
            setHc((prev) => ({
                ...rgba,
                ...hsv,
                h: Math.abs(hsv.h - prev.h) < 1 ? prev.h : hsv.h,
            }));
        }
    }, [currentColor]);

    useEffect(() => {
        setHc((prev) => {
            const hueDiff = Math.min(Math.abs(hsv.h - prev.h), 360 - Math.abs(hsv.h - prev.h));

            return {
                ...rgba,
                ...hsv,
                h: hsv.s === 0 || hueDiff < 2 ? prev.h : hsv.h,
            };
        });
    }, [currentColor]);

    const [selectedColor, setSelectedColor] = useState(0);

    const selectColor = (index: number) => {
        setSelectedColor(index);
        // Обновляем регистр в строке чтобы high/low подсветка работала
        const newColors = colors.map((cc, idx) => ({
            ...cc,
            value: idx === index ? high(cc) : low(cc),
        }));
        createGradientStr(newColors); // без newSelectedIndex — не трогаем selectedColor внутри
    };

    const createGradientStr = (newColors: ColorStop[], newSelectedIndex?: number) => {
        const sorted = [...newColors].sort((a, b) => a.left - b.left);

        // Находим индекс выбранного после сортировки
        if (newSelectedIndex !== undefined) {
            const selectedValue = newColors[newSelectedIndex]?.value.toLowerCase();
            const newIndex = sorted.findIndex((c) => c.value.toLowerCase() === selectedValue);
            setSelectedColor(newIndex >= 0 ? newIndex : 0);
        }

        const colorString = sorted.map((cc) => `${cc.value} ${cc.left}%`);
        const newGrade = `${gradientType}(${degreeStr}, ${colorString.join(', ')})`;
        setPrevious((prev) => ({ ...prev, gradient: newGrade }));
        onChange?.(newGrade);
    };

    const handleGradient = (newColor: string, left?: number) => {
        const remaining = colors.filter((c) => !isUpperCase(c.value));
        const newColors = [{ value: newColor.toUpperCase(), left: left ?? currentLeft }, ...remaining];
        createGradientStr(newColors, 0); // новый цвет всегда первый до сортировки
    };

    const handleChange = (newColor: string) => {
        if (isGradient) {
            handleGradient(newColor);
        } else {
            setPrevious((prev) => ({ ...prev, color: newColor }));
            onChange?.(newColor);
        }
    };

    const deletePoint = () => {
        if (colors.length <= 2) return;
        const formatted = colors.map((fc, i) => ({
            ...fc,
            value: i === selectedColor - 1 ? high(fc) : low(fc),
        }));
        createGradientStr(formatted.filter((_, i) => i !== selectedColor));
    };

    const pickerContext = useMemo<PickerContextProps>(
        () => ({
            hc,
            setHc,
            value,
            colors,
            config,
            degrees,
            onChange,
            previous,
            inputType,
            tinyColor,
            isDarkMode,
            isGradient,
            squareWidth,
            hideOpacity,
            currentLeft,
            deletePoint,
            showHexAlpha,
            squareHeight,
            setInputType,
            gradientType,
            handleChange,
            currentColor,
            selectedColor,
            handleGradient,
            pickerIdSuffix,
            createGradientStr,
            selectColor,
        }),
        [
            hc,
            value,
            colors,
            config,
            degrees,
            onChange,
            previous,
            inputType,
            isDarkMode,
            isGradient,
            squareWidth,
            hideOpacity,
            currentLeft,
            showHexAlpha,
            squareHeight,
            gradientType,
            currentColor,
            selectedColor,
            pickerIdSuffix,
        ],
    );

    return <PickerContext.Provider value={pickerContext}>{children}</PickerContext.Provider>;
}

export function usePicker(): PickerContextProps {
    const pickerContext = useContext(PickerContext);

    if (!pickerContext) {
        throw new Error('usePicker has to be used within <PickerContextWrapper>');
    }

    return pickerContext;
}
