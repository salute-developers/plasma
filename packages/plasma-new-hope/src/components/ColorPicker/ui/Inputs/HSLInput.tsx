import React from 'react';
import tc from 'tinycolor2';
import { round } from 'src/components/ColorPicker/lib/formatters';

import { usePicker } from '../../ColorPicker.context';

import { Input } from './Input';

export const HSLInputs = () => {
    const { hc, setHc, tinyColor, handleChange } = usePicker();
    const { s, l } = tinyColor.toHsl();

    const handleH = (h: number) => {
        const { r, g, b } = tc({ h, s, l }).toRgb();
        handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`);
        setHc({ ...hc, h });
    };

    const handleSL = (patch: { s?: number; l?: number }) => {
        const { r, g, b } = tc({ h: hc.h, s: patch.s ?? s, l: patch.l ?? l }).toRgb();
        handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`);
    };

    return (
        <>
            <Input label="H" max={360} value={round(hc.h)} onChange={(val) => handleH(+val)} />
            <Input label="S" value={round(s * 100)} onChange={(v) => handleSL({ s: +v / 100 })} />
            <Input label="L" value={round(l * 100)} onChange={(v) => handleSL({ l: +v / 100 })} />
        </>
    );
};
