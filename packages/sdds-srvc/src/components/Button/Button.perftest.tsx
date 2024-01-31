import React from 'react';

import { IconPlaceholder } from '../../helpers';

import { Button } from '.';

const defaultProps = {
    view: 'primary' as const,
    size: 'l' as const,
    disabled: false,
    outlined: true,
    focused: false,
    contentType: 'Text' as const,
    isLoading: false,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
};
const text = 'Label' as const;

export const Default = () => {
    return (
        <Button
            autoFocus
            text={text}
            contentLeft={<IconPlaceholder />}
            contentRight={<IconPlaceholder />}
            {...defaultProps}
        />
    );
};
