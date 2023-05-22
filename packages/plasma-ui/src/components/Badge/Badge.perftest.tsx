import React from 'react';
import { IconSettings } from '@salutejs/plasma-icons';

import { Badge } from '.';

const defaultProps = {
    text: 'Badge' as const,
    size: 'l' as const,
    view: 'primary' as const,
    enableIcon: false,
};

export const Default = () => <Badge contentLeft={<IconSettings color="inherit" size="xs" />} {...defaultProps} />;

const quantityProps = {
    text: '11' as const,
    size: 's' as const,
    view: 'secondary' as const,
    circled: true,
};

export const Quantity = () => <Badge {...quantityProps} />;
