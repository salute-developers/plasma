import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconButton3x2LFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="button3x2LFill" />;
};
