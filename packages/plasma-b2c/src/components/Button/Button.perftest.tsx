import React from 'react';
import { IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { Button } from '.';

const defaultProps = {
    view: 'primary' as const,
    size: 'l' as const,
    pin: 'square-square' as const,
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
        <Button text={text} contentLeft={<IconPlaceholder />} contentRight={<IconPlaceholder />} {...defaultProps} />
    );
};

export const Anchor = () => {
    return (
        <Button
            as="a"
            text={text}
            contentLeft={<IconPlaceholder />}
            contentRight={<IconPlaceholder />}
            {...defaultProps}
        />
    );
};
