import tc from 'tinycolor2';
import { useState, useEffect } from 'react';

import { ColorStop, Config } from '../ColorPicker.types';
import { usePicker } from '../ColorPicker.context';
import { formatInputValues, getColors } from '../lib/formatters';
import { getColorObj, getDetails, isUpperCase } from '../lib/utils';
import { high, low } from '../lib/colorStopFormatters';
import { rgb2cmyk } from '../lib/converters';

export const useColorPicker = (value: string, onChange: (value: string) => void, config?: Config) => {
    const {
        defaultColor = 'rgba(175, 51, 242, 1)',
        defaultGradient = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    } = config ?? {};

    const colors = getColors(value, defaultColor, defaultGradient);
    const { degrees, degreeStr, isGradient, gradientType } = getDetails(value);
    const { selectedColor } = usePicker();
    const { currentColor, currentLeft } = getColorObj(colors);
    const [previousColors, setPreviousColors] = useState<string[]>([]);

    const tiny = tc(currentColor);
    const { r, g, b, a } = tiny.toRgb();
    const { h, s, l } = tiny.toHsl();

    useEffect(() => {
        if (tc(currentColor).isValid() && previousColors[0] !== currentColor) {
            setPreviousColors([currentColor, ...previousColors.slice(0, 19)]);
        }
    }, [currentColor, previousColors]);

    const createGradientStr = (newColors: ColorStop[]) => {
        const sorted = [...newColors].sort((a, b) => a.left - b.left);
        const colorString = sorted.map((cc) => `${cc.value} ${cc.left}%`);
        onChange(`${gradientType}(${degreeStr}, ${colorString.join(', ')})`);
    };

    const handleGradient = (newColor: string, left?: number) => {
        const remaining = colors.filter((c) => !isUpperCase(c.value));
        const newColors: ColorStop[] = [{ value: newColor.toUpperCase(), left: left ?? currentLeft }, ...remaining];
        createGradientStr(newColors);
    };

    const handleChange = (newColor: string) => {
        const sanitized = newColor.replace(/\s+/g, '');
        if (isGradient) {
            handleGradient(sanitized);
        } else {
            onChange(sanitized);
        }
    };

    const getGradientObject = (currentValue: string) => {
        const resolvedColors = currentValue ? getColors(currentValue, defaultColor, defaultGradient) : colors;

        if (!value) {
            throw new Error(
                'plasmaColorPicker: value и onChange являются обязательными пропсами для хука useColorPicker',
            );
        }

        const mappedColors = resolvedColors.map((c) => ({
            ...c,
            value: c.value.toLowerCase(),
        }));

        if (isGradient) {
            return {
                isGradient: true,
                gradientType,
                degrees: degreeStr,
                colors: mappedColors,
            };
        }

        return {
            isGradient: false,
            gradientType: null,
            degrees: null,
            colors: mappedColors,
        };
    };

    const setLinear = () => {
        const remaining = value.split(/,(.+)/)[1];
        onChange(`linear-gradient(90deg, ${remaining}`);
    };

    const setRadial = () => {
        const remaining = value.split(/,(.+)/)[1];
        onChange(`radial-gradient(circle, ${remaining}`);
    };

    const setDegrees = (newDegrees: number) => {
        if (gradientType !== 'linear-gradient') {
            console.warn(
                'Предупреждение: вы обновляете градусы, когда тип градиента не линейный. Это изменит тип градиента, что может быть нежелательно',
            );
        }
        const remaining = value.split(/,(.+)/)[1];
        onChange(`linear-gradient(${formatInputValues(newDegrees, 0, 360)}deg, ${remaining}`);
    };

    const setSolid = (startingColor?: string) => {
        onChange(startingColor ?? defaultColor);
    };

    const setGradient = (startingGradient?: string) => {
        onChange(startingGradient ?? defaultGradient);
    };

    const setR = (newR: number) => {
        handleChange(`rgba(${formatInputValues(newR, 0, 255)}, ${g}, ${b}, ${a})`);
    };

    const setG = (newG: number) => {
        handleChange(`rgba(${r}, ${formatInputValues(newG, 0, 255)}, ${b}, ${a})`);
    };

    const setB = (newB: number) => {
        handleChange(`rgba(${r}, ${g}, ${formatInputValues(newB, 0, 255)}, ${a})`);
    };

    const setA = (newA: number) => {
        handleChange(`rgba(${r}, ${g}, ${b}, ${formatInputValues(newA, 0, 100) / 100})`);
    };

    const setHue = (newHue: number) => {
        const { r, g, b } = tc({ h: formatInputValues(newHue, 0, 360), s, l }).toRgb();
        handleChange(`rgba(${r}, ${g}, ${b}, ${a})`);
    };

    const setSaturation = (newSat: number) => {
        const { r, g, b } = tc({ h, s: formatInputValues(newSat, 0, 100) / 100, l }).toRgb();
        handleChange(`rgba(${r}, ${g}, ${b}, ${a})`);
    };

    const setLightness = (newLight: number) => {
        const tinyNew = tc({ h, s, l: formatInputValues(newLight, 0, 100) / 100 });
        if (!tinyNew.isValid()) {
            console.warn('setLightness: результирующий цвет недействителен. Передайте значение между 0 и 100');
            return;
        }
        const { r, g, b } = tinyNew.toRgb();
        handleChange(`rgba(${r}, ${g}, ${b}, ${a})`);
    };

    const setSelectedPoint = (index: number) => {
        if (!isGradient) {
            console.warn('setSelectedPoint: актуально только в режиме градиента');
            return;
        }
        const newGradStr = colors.map((cc, i) => ({
            ...cc,
            value: i === index ? high(cc) : low(cc),
        }));
        createGradientStr(newGradStr);
    };

    const addPoint = (left: number) => {
        if (!left) {
            console.warn('addPoint: не передано значение остановки (left), по умолчанию устанавливается 50');
        }
        const newColors: ColorStop[] = [
            ...colors.map((c) => ({ ...c, value: low(c) })),
            { value: currentColor, left: left ?? 50 },
        ];
        createGradientStr(newColors);
    };

    const deletePoint = (index?: number) => {
        if (colors.length <= 2) {
            console.warn('deletePoint: градиент должен содержать как минимум два цвета');
            return;
        }
        const pointToDelete = index ?? selectedColor;
        if (index === undefined) {
            console.warn('deletePoint: индекс не передан, используется текущая выбранная точка по умолчанию');
        }
        const remaining = colors.filter((_, i) => i !== pointToDelete);
        createGradientStr(remaining);
    };

    const setPointLeft = (left: number) => {
        handleGradient(currentColor, formatInputValues(left, 0, 100));
    };

    return {
        setR,
        setG,
        setB,
        setA,
        setHue,
        addPoint,
        setSolid,
        setLinear,
        setRadial,
        setDegrees,
        setGradient,
        setLightness,
        setSaturation,
        setSelectedPoint,
        deletePoint,
        setPointLeft,
        handleChange,
        isGradient,
        gradientType,
        degrees,
        currentLeft,
        previousColors,
        getGradientObject,
        selectedPoint: selectedColor,
        rgbaArr: [r, g, b, a],
        hslArr: [h, s, l],
        valueToHex: () => tiny.toHexString(),
        valueToHSL: () => tiny.toHslString(),
        valueToHSV: () => tiny.toHsvString(),
        valueToCmyk: () => {
            const { c, m, y, k } = rgb2cmyk(r, g, b);
            return `cmyk(${c}, ${m}, ${y}, ${k})`;
        },
    };
};
