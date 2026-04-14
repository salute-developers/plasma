import React, { useState } from 'react';
import tinycolor from 'tinycolor2';

import { IconPalette } from '../../../_Icon';
import { defaultPresets } from '../../lib/const';
import { usePicker } from '../../ColorPicker.context';
import { Group, Stack } from '../../ColorPicker.styles';

import { Chevron, SwatchColor, SwatchesAccordionRoot, SwatchesWrapper, SwatchRoot } from './Swatches.styled';

export const Swatches = ({ presets = [] }: { presets?: string[] }) => {
    const { onChange, handleChange, pickerIdSuffix, value, selectedColor, colors } = usePicker();

    const [presetsShown, setPresetShown] = useState<boolean>(true);
    const onPresetsDisclosure = () => setPresetShown((prev) => !prev);

    const activePresets = presets.length > 0 ? presets.slice(0, 18) : defaultPresets;

    const handlePresetClick = (preset: string) => {
        if (preset.includes('gradient')) {
            onChange?.(preset);
        } else {
            handleChange(preset);
        }
    };

    const getBorder = (p: string, darkenAmount = 12): string => {
        if (!p) return '';
        const color = p.replace(/\s+/g, '');
        const darkenedColor = tinycolor(color).darken(darkenAmount).toString();
        return `1px solid ${darkenedColor}`;
    };

    return (
        <Stack gap={12}>
            <SwatchesAccordionRoot as="button" aria-pressed={presetsShown} onClick={onPresetsDisclosure}>
                <Group gap={8} align="center">
                    <IconPalette color="var(--text-paragraph)" />
                    <span>Палитра</span>
                </Group>
                <Chevron $active={presetsShown} />
            </SwatchesAccordionRoot>
            {presetsShown && (
                <SwatchesWrapper id={`plasma-color-picker-presets-wrapper${pickerIdSuffix}`}>
                    {activePresets.map((p, i) => {
                        const selected =
                            tinycolor(value).toString('hex') === tinycolor(p).toString('hex') ||
                            tinycolor(colors[selectedColor].value).toString('hex') === tinycolor(p).toString('hex');

                        return (
                            <SwatchRoot
                                aria-label={`Select color ${p}`}
                                onClick={() => handlePresetClick(p)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') handlePresetClick(p);
                                }}
                                key={p}
                                id={`plasma-color-picker-preset-${i}-wrapper${pickerIdSuffix}`}
                            >
                                <SwatchColor
                                    $bg={p}
                                    $selected={selected}
                                    $border={getBorder(p)}
                                    id={`plasma-color-picker-preset-${i}${pickerIdSuffix}`}
                                    $outlineColor={tinycolor(p).darken(12).toString()}
                                />
                            </SwatchRoot>
                        );
                    })}
                </SwatchesWrapper>
            )}
        </Stack>
    );
};
