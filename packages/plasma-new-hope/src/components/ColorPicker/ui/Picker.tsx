import React, { useCallback } from 'react';

import { usePicker } from '../ColorPicker.context';
import { LocalesProps } from '../ColorPicker.types';
import { Group, Stack } from '../ColorPicker.styles';

import { GradientControls, GradientBar } from './Gradient';
import { InputTypeTab, Inputs } from './Inputs';
import { Dropper } from './EyeDropper/EyeDropper';
import { ColorTypeTabs } from './ColorTypeTabs';
import { ColorPreview } from './ColorPreview';
import { Hue } from './Hue';
import { Saturation } from './Saturation';
import { Opacity } from './Opacity';
import { Swatches } from './Swatches';

export interface ColorPickerProps {
    presets?: string[];
    locales?: LocalesProps;
    hideHue?: boolean;
    hideInputs?: boolean;
    hidePresets?: boolean;
    hideOpacity?: boolean;
    hideControls?: boolean;
    hideEyeDrop?: boolean;
    hideInputType?: boolean;
    hideColorGuide?: boolean;
    hidePickerSquare?: boolean;
    hideGradientType?: boolean;
    hideGradientStop?: boolean;
    hideGradientAngle?: boolean;
    hideColorTypeControls?: boolean;
    hideAdvancedSliders?: boolean;
    hideGradientControls?: boolean;
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
}

export const Picker = ({
    locales,
    presets,
    hideHue,
    hideInputs,
    hidePresets,
    hideOpacity,
    hideEyeDrop,
    hideControls,
    hidePickerSquare,
    hideGradientType,
    hideGradientStop,
    hideGradientAngle,
    hideColorTypeControls,
    hideGradientControls,
    dropperButtonSlot,
    degreePickerSlot,
    stopPickerSlot,
    removeGradientStopSlot,
}: ColorPickerProps) => {
    const { config, onChange, isGradient, previous, pickerIdSuffix, handleChange } = usePicker();
    const { defaultColor, defaultGradient } = config;

    const setSolid = useCallback(() => onChange?.(previous?.color ?? defaultColor), [
        onChange,
        previous.color,
        defaultColor,
    ]);
    const setGradient = useCallback(() => onChange?.(previous?.gradient ?? defaultGradient), [
        onChange,
        previous.gradient,
        defaultGradient,
    ]);

    return (
        <div style={{ userSelect: 'none' }} id={`plasma-color-picker-color-picker${pickerIdSuffix}`}>
            {!hideColorTypeControls && (
                <ColorTypeTabs
                    isGradient={isGradient}
                    locales={locales}
                    setSolid={setSolid}
                    setGradient={setGradient}
                />
            )}
            {!hidePickerSquare ? <Saturation /> : null}

            <Group mb={12} gap={12} align="center">
                <ColorPreview />
                <Stack gap={12}>
                    {isGradient ? <GradientBar /> : null}
                    {!hideHue ? <Hue /> : null}
                    {!hideOpacity ? <Opacity /> : null}
                </Stack>
            </Group>

            <Stack gap={8}>
                <InputTypeTab />
                <Group align="center" gap={4} mb={12}>
                    {!hideEyeDrop ? <Dropper dropperButtonSlot={dropperButtonSlot} onSelect={handleChange} /> : null}

                    {hideInputs ? null : <Inputs />}
                </Group>
            </Stack>

            <Group mb={12}>
                {!hideControls && isGradient && !hideGradientControls ? (
                    <GradientControls
                        hideGradientType={hideGradientType}
                        hideGradientAngle={hideGradientAngle}
                        hideGradientStop={hideGradientStop}
                        removeGradientStopSlot={removeGradientStopSlot}
                        stopPickerSlot={stopPickerSlot}
                        degreePickerSlot={degreePickerSlot}
                    />
                ) : null}
            </Group>

            {!hidePresets ? <Swatches presets={presets} /> : null}
        </div>
    );
};
