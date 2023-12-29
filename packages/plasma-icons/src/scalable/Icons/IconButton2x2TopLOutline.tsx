import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconButton2x2TopLOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="button2x2TopLOutline" />;
};
