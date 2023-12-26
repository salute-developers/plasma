import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconButton3x2ROutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="button3x2ROutline" />;
};
