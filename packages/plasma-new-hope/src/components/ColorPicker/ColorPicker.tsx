import React, { forwardRef } from 'react';

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
            ...rest
        } = props;

        const safeValue = objectToString(value);

        const getIsDarkMode = (): boolean => {
            if (typeof window === 'undefined') return false;
            if (disableDarkMode) return false;
            if (disableLightMode) return true;
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        };

        const isDarkMode = getIsDarkMode();

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
                    hideOpacity={rest.hideOpacity}
                    showHexAlpha={showHexAlpha}
                    pickerIdSuffix={pickerIdSuffix}
                >
                    <Picker locales={locales} presets={presets} {...rest} />
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
