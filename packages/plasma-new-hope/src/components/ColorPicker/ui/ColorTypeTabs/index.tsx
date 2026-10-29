import React from 'react';

import { Group } from '../../ColorPicker.styles';
import { usePicker } from '../../ColorPicker.context';
import { LocalesProps } from '../../ColorPicker.types';
import { StyledButton } from '../Button';

interface ColorTypeTabsProps {
    setSolid: VoidFunction;
    setGradient: VoidFunction;
    locales?: LocalesProps;
    isGradient?: boolean;
    hideColorTypeTabs?: boolean;
}

export const ColorTypeTabs = ({
    hideColorTypeTabs,
    setGradient,
    setSolid,
    locales,
    isGradient,
}: ColorTypeTabsProps) => {
    const { pickerIdSuffix } = usePicker();

    if (hideColorTypeTabs) return null;

    return (
        <Group id={`plasma-color-picker-color-type-btns${pickerIdSuffix}`} mb={16} align="center" gap={4}>
            <StyledButton $active={!isGradient} stretching="filled" size="xs" onClick={setSolid}>
                {locales?.CONTROLS?.SOLID}
            </StyledButton>
            <StyledButton $active={isGradient} stretching="filled" size="xs" onClick={setGradient}>
                {locales?.CONTROLS?.GRADIENT}
            </StyledButton>
        </Group>
    );
};
