import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconButton2x2TopRFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="button2x2TopRFill" />;
};
