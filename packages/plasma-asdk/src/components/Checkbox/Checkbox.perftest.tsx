import React from 'react';

import { Checkbox } from '.';

const func = () => {};

const defaultProps = {
    name: 'checkbox' as const,
    label: 'Label' as const,
    description: 'Description' as const,
    disabled: false,
    size: 'm' as const,
};

export const Default = () => {
    return <Checkbox value={0} checked onChange={func} onFocus={func} onBlur={func} {...defaultProps} />;
};
