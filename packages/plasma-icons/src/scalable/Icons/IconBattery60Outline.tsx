import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconBattery60Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="battery60Outline" />;
};
