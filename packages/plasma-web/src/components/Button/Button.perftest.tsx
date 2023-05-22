import React from 'react';

import { IconPlaceholder } from '../../helpers';

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
        <Button
            autoFocus
            text={text}
            contentLeft={<IconPlaceholder />}
            contentRight={<IconPlaceholder />}
            {...defaultProps}
        />
    );
};

export const Anchor = () => (
    <Button as="a" text={text} contentLeft={<IconPlaceholder />} contentRight={<IconPlaceholder />} {...defaultProps} />
);
