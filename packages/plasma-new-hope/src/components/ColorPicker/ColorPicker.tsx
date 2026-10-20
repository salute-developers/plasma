import React, { forwardRef, useEffect, useState } from 'react';

import type { RootProps } from '../../engines';

import { objectToString } from './lib/utils';
import { defaultLocales } from './lib/const';
import { ColorPickerProps } from './ColorPicker.types';
import PickerContextWrapper from './ColorPicker.context';
import { Picker } from './ui/Picker';
import { base } from './ColorPicker.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

export const colorPicker = (Root: RootProps<HTMLDivElement, ColorPickerProps>) =>
    forwardRef<HTMLDivElement, ColorPickerProps>((props, ref) => {
        const {
            idSuffix,
            value = 'rgba(175, 51, 242, 1)',
            onChange,
            presets = [],
            locales = defaultLocales,
            width = 256,
            height = 256,
            className,
            disableDarkMode = false,
            disableLightMode = false,
            showHexAlpha = false,
            config = {},
            // Пропсы пикера держим отдельно от HTML-атрибутов, иначе React отдаёт их в DOM.
            hideControls,
            hideInputs,
            hideOpacity,
            hidePresets,
            hideHue,
            hideEyeDrop,
            hideColorGuide,
            hideInputType,
            hideColorTypeControls,
            hideGradientType,
            hideGradientAngle,
            hideGradientStop,
            hideGradientControls,
            hidePickerSquare,
            dropperButtonSlot,
            degreePickerSlot,
            stopPickerSlot,
            removeGradientStopSlot,
            ...rest
        } = props;

        const pickerProps = {
            hideControls,
            hideInputs,
            hideOpacity,
            hidePresets,
            hideHue,
            hideEyeDrop,
            hideColorGuide,
            hideInputType,
            hideColorTypeControls,
            hideGradientType,
            hideGradientAngle,
            hideGradientStop,
            hideGradientControls,
            hidePickerSquare,
            dropperButtonSlot,
            degreePickerSlot,
            stopPickerSlot,
            removeGradientStopSlot,
        };

        const safeValue = objectToString(value);

        // На сервере системной темы нет, поэтому первый рендер всегда светлый — иначе ломается гидрация.
        const [prefersDark, setPrefersDark] = useState(false);

        useEffect(() => {
            if (disableDarkMode || disableLightMode) return undefined;

            const query = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (e: MediaQueryListEvent) => setPrefersDark(e.matches);

            setPrefersDark(query.matches);
            query.addEventListener('change', handleChange);

            return () => query.removeEventListener('change', handleChange);
        }, [disableDarkMode, disableLightMode]);

        const isDarkMode = (!disableDarkMode && disableLightMode) || (!disableDarkMode && prefersDark);

        const buildPickerIdSuffix = (): string => {
            const suffix = idSuffix ? `-${idSuffix}` : '';
            return isDarkMode ? `-dark${suffix}` : suffix;
        };

        const pickerIdSuffix = buildPickerIdSuffix();

        return (
            <Root ref={ref} className={className} style={{ width }} {...rest}>
                <PickerContextWrapper
                    value={safeValue}
                    onChange={onChange}
                    squareWidth={width}
                    passedConfig={config}
                    squareHeight={height}
                    isDarkMode={isDarkMode}
                    hideOpacity={hideOpacity}
                    showHexAlpha={showHexAlpha}
                    pickerIdSuffix={pickerIdSuffix}
                >
                    <Picker locales={locales} presets={presets} {...pickerProps} />
                </PickerContextWrapper>
            </Root>
        );
    });

export const colorPickerConfig = {
    name: 'ColorPicker',
    tag: 'div',
    layout: colorPicker,
    base,
    variations: {
        view: {
            default: viewCSS,
        },
        size: {
            default: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 's',
    },
};
