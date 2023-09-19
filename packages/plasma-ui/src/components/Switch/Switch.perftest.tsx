import React from 'react';

import { Switch } from '.';

const onChange = () => {};

export function Default() {
    window.top;
    return (
        <Switch
            key={1}
            name="switch"
            value={1}
            label="Switch 1"
            disabled
            pressed
            checked={false}
            tabIndex={0}
            onChange={onChange}
            onFocus={onChange}
            onBlur={onChange}
        />
    );
}
