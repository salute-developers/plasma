// --- CMYKInputs ---

import React from 'react';
import { CMYK, cmykToRgb, rgb2cmyk } from 'src/components/ColorPicker/lib/converters';
import { round } from 'src/components/ColorPicker/lib/formatters';

import { usePicker } from '../../ColorPicker.context';

import { Input } from './Input';

export const CMYKInputs = () => {
    const { hc, handleChange } = usePicker();
    const { c, m, y, k } = rgb2cmyk(hc.r, hc.g, hc.b);

    const handleCmyk = (patch: Partial<CMYK>) => {
        const full = { c, m, y, k, ...patch };
        const { r, g, b } = cmykToRgb(full);
        handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`);
    };

    return (
        <>
            <Input label="C" value={round(c * 100)} onChange={(v) => handleCmyk({ c: +v / 100 })} />
            <Input label="M" value={round(m * 100)} onChange={(v) => handleCmyk({ m: +v / 100 })} />
            <Input label="Y" value={round(y * 100)} onChange={(v) => handleCmyk({ y: +v / 100 })} />
            <Input label="K" value={round(k * 100)} onChange={(v) => handleCmyk({ k: +v / 100 })} />
        </>
    );
};
