import React from 'react';

import { Switch } from '.';

const func = () => {};

const defaultProps = {
    label: 'Label',
    disabled: false,
};
export const Default = () => {
    return <Switch value={0} checked onChange={func} onFocus={func} onBlur={func} {...defaultProps} />;
};
