import React from 'react';

import { usePicker } from '../../ColorPicker.context';

import { StyledColorPreview } from './ColorPreview.styled';

export const ColorPreview = () => {
    const { pickerIdSuffix, value } = usePicker();

    return <StyledColorPreview $backgroundColor={value} id={`plasma-color-picker-preview${pickerIdSuffix}`} />;
};
