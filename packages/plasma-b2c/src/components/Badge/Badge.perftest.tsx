import React from 'react';
import { IconSettings } from '@salutejs/plasma-icons';

import { Badge } from '.';

const defaultProps = {
    text: 'Badge' as const,
    size: 'l' as const,
    view: 'primary' as const,
    enableIcon: true,
};

export const Default = () => {
    return <Badge contentLeft={<IconSettings color="inherit" size="xs" />} {...defaultProps} />;
};
