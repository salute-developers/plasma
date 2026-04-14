import React from 'react';

import { usePicker } from '../../ColorPicker.context';
import { Group } from '../../ColorPicker.styles';
import { tokens } from '../../ColorPicker.tokens';
import { LinearIcon, RadialIcon } from '../icons';

import { GradientTypeControl } from './Gradient.styled';
import { makeKeyHandler } from './utils';

export const GradientType = () => {
    const { gradientType, onChange, value, pickerIdSuffix } = usePicker();

    const isLinear = gradientType === 'linear-gradient';
    const isRadial = gradientType === 'radial-gradient';

    const handleLinear = () => {
        const remaining = value.split(/,(.+)/)[1];
        onChange?.(`linear-gradient(90deg, ${remaining}`);
    };

    const handleRadial = () => {
        const remaining = value.split(/,(.+)/)[1];
        onChange?.(`radial-gradient(circle, ${remaining}`);
    };

    return (
        <Group>
            <GradientTypeControl
                type="button"
                onClick={handleLinear}
                onKeyDown={makeKeyHandler(handleLinear)}
                id={`plasma-color-picker-linear-btn${pickerIdSuffix}`}
                aria-label="Linear gradient"
                aria-pressed={isLinear}
            >
                <LinearIcon color={isLinear ? `var(${tokens.activeTabTextColor})` : ''} />
            </GradientTypeControl>
            <GradientTypeControl
                type="button"
                onClick={handleRadial}
                onKeyDown={makeKeyHandler(handleRadial)}
                id={`plasma-color-picker-radial-btn${pickerIdSuffix}`}
                aria-label="Radial gradient"
                aria-pressed={isRadial}
            >
                <RadialIcon color={isRadial ? `var(${tokens.activeTabTextColor})` : ''} />
            </GradientTypeControl>
        </Group>
    );
};
