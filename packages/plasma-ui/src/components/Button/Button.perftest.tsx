import React from 'react';
import { IconMic } from '@salutejs/plasma-icons';

import { Button, ActionButton as ActionButtonComponent } from '.';

const defaultProps = {
    size: 'm' as const,
    view: 'primary' as const,
    pin: 'square-square' as const,
    enableIcon: true,
    scaleOnInteraction: true,
    outlined: true,
    focused: false,
    disabled: false,
    square: false,
    stretch: false,
    isLoading: false,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
};
const text = 'Hello Plasma' as const;

export const Default = () => (
    <Button text={text} contentLeft={<IconMic size="s" color="inherit" />} {...defaultProps} />
);

const actionButton = {
    size: 'm',
    view: 'primary',
    pin: 'square-square',
    scaleOnInteraction: true,
    disabled: false,
    tabIndex: 0,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
} as const;

export const ActionButton = () => (
    <ActionButtonComponent {...actionButton}>
        <IconMic size="xs" color="inherit" />
    </ActionButtonComponent>
);
