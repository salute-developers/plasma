import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconArrowWideUpOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="arrowWideUpOutline" />;
};
