import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Select, TextField } from '@salutejs/plasma-b2c';
import { PlasmaSaturation } from '@salutejs/plasma-colors';
import { getRestoredColorFromPalette } from '@salutejs/plasma-tokens-utils';

import { PreviewColor } from '../PreviewColor/PreviewColor';

import {
    getAccentColors,
    getBackgroundColor,
    getPaletteColorByHEX,
    getPaletteColorByValue,
    getSaturations,
} from '../../utils';
import type { GeneralColor, InputDataValue } from '../../types';

const Root = styled.div``;

const StyledSelect = styled(Select)`
    /* stylelint-disable-next-line selector-max-universal */
    * {
        /* stylelint-disable-next-line font-weight-notation */
        font-weight: 400;
    }

    width: 15rem;
`;

const StyledPaletteSelect = styled.div`
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
`;

const StyledTextField = styled(TextField)`
    width: 35rem;
`;

interface SolidTokenValueProps {
    value: InputDataValue;
    onChangeValue: (value: string) => void;
}

export const SolidTokenValue = ({ value, onChangeValue }: SolidTokenValueProps) => {
    const [paletteColor, paletteSaturation] = getPaletteColorByValue(value.value);

    const [selectedColor, setSelectedColor] = useState<GeneralColor | undefined>(paletteColor);
    const [selectedSaturation, setSelectedSaturation] = useState<PlasmaSaturation | undefined>(paletteSaturation);

    const normalizeColor = useMemo(
        () => (typeof value.value === 'string' ? getRestoredColorFromPalette(value.value) : ''),
        [value.value],
    );

    const accentColors = useMemo(() => getAccentColors(), []);

    const saturations = useMemo(() => getSaturations(selectedColor), [selectedColor]);

    const onChangeSelectedColor = useCallback(
        (color: GeneralColor) => {
            const saturation500 = 7;
            const saturation: PlasmaSaturation = selectedSaturation || getSaturations()[saturation500].value;

            setSelectedColor(color);
            setSelectedSaturation(saturation);

            onChangeValue(`[general.${color}.${saturation}]`);
        },
        [onChangeValue, selectedSaturation],
    );

    const onChangeSelectedSaturation = useCallback(
        (saturation: PlasmaSaturation) => {
            const colorRed = 0;
            const color: GeneralColor = selectedColor || getAccentColors()[colorRed].value;

            setSelectedColor(color);
            setSelectedSaturation(saturation);

            onChangeValue(`[general.${color}.${saturation}]`);
        },
        [onChangeValue, selectedColor],
    );

    const onChangeTokenValue = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;

            const [color, saturation] = getPaletteColorByHEX(value);

            setSelectedColor(color);
            setSelectedSaturation(saturation);

            const formattedColor = color && saturation ? `[general.${color}.${saturation}]` : value;
            onChangeValue(formattedColor);
        },
        [onChangeValue],
    );

    return (
        <Root>
            <StyledPaletteSelect>
                <PreviewColor background={getBackgroundColor(value.value)} borderRadius="0.75rem" size="3rem" />
                <StyledSelect
                    listOverflow="scroll"
                    listHeight="25"
                    items={accentColors}
                    value={selectedColor}
                    onChange={onChangeSelectedColor}
                />
                <StyledSelect
                    listOverflow="scroll"
                    listHeight="25"
                    items={saturations}
                    value={selectedSaturation}
                    onChange={onChangeSelectedSaturation}
                />
            </StyledPaletteSelect>
            <StyledTextField
                size="s"
                name="value"
                value={normalizeColor}
                status={value?.status}
                helperText={value?.helpText}
                onChange={onChangeTokenValue}
            />
        </Root>
    );
};
