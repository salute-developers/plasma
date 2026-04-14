import React, { useEffect, useState } from 'react';
import tc from 'tinycolor2';
import { isNumber } from 'lodash';

import { getHexAlpha } from '../../lib/converters';
import { usePicker } from '../../ColorPicker.context';
import { IconHash } from '../../../_Icon/Icons/IconHash';
import { Group } from '../../ColorPicker.styles';

import { Input } from './Input';

export const HexInput = () => {
    const { hc, tinyColor, showHexAlpha, handleChange, pickerIdSuffix } = usePicker();
    const [disable, setDisable] = useState('');
    const hex = tinyColor.toHex();
    const [newHex, setNewHex] = useState(hex);

    useEffect(() => {
        if (disable !== 'hex') setNewHex(hex);
    }, [tinyColor, disable, hex]);

    const handleHex = (value: string | number) => {
        if (isNumber(value) || disable === hex) return;

        const val = value;
        setNewHex(val);
        const tinyHex = tc(val);
        if (tinyHex.isValid()) {
            const { r, g, b } = tinyHex.toRgb();
            handleChange(`rgba(${r}, ${g}, ${b}, ${hc.a})`);
        }
    };

    const displayValue = showHexAlpha ? `${newHex}${getHexAlpha(hc.a)}` : newHex;
    const label = showHexAlpha ? 'HEXA' : 'HEX';

    return (
        <Group align="center">
            <Input
                slot={<IconHash />}
                onBlur={() => setDisable('')}
                onFocus={() => setDisable('hex')}
                onChange={handleHex}
                value={displayValue.toUpperCase()}
                id={`plasma-color-picker-hex-input${pickerIdSuffix}`}
                aria-label={label}
                label="HEX"
                style={{ textAlign: 'left' }}
            />
        </Group>
    );
};
