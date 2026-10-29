import React from 'react';

import { usePicker } from '../../ColorPicker.context';

import { Input } from './Input';

export const RGBInputs = () => {
    const { hc, handleChange } = usePicker();

    const handleRgb = (patch: Partial<{ r: number; g: number; b: number }>) => {
        const { r, g, b } = { ...hc, ...patch };
        handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`);
    };

    return (
        <>
            <Input label="R" max={255} value={hc.r} onChange={(v) => handleRgb({ r: +v })} />
            <Input label="G" max={255} value={hc.g} onChange={(v) => handleRgb({ g: +v })} />
            <Input label="B" max={255} value={hc.b} onChange={(v) => handleRgb({ b: +v })} />
        </>
    );
};
