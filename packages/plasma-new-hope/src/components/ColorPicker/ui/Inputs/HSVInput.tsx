// --- HSVInputs ---

import React from 'react';
import tc from 'tinycolor2';
import { round } from 'src/components/ColorPicker/lib/formatters';

import { usePicker } from '../../ColorPicker.context';

import { Input } from './Input';

export const HSBInputs = () => {
    const { hc, setHc, handleChange } = usePicker();

    const handleH = (h: number) => {
        const { r, g, b } = tc({ h, s: hc.s, v: hc.v }).toRgb();
        handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`);
        setHc({ ...hc, h });
    };

    const handleSV = (patch: { s?: number; v?: number }) => {
        const { r, g, b } = tc({ h: hc.h, s: patch.s ?? hc.s, v: patch.v ?? hc.v }).toRgb();
        handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`);
    };

    return (
        <>
            <Input label="H" max={360} value={round(hc.h)} onChange={(val) => handleH(+val)} />
            <Input label="S" value={round(hc.s * 100)} onChange={(v) => handleSV({ s: +v / 100 })} />
            <Input label="V" value={round(hc.v * 100)} onChange={(v) => handleSV({ v: +v / 100 })} />
        </>
    );
};
