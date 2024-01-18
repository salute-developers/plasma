import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconBattery20Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="battery20Outline" />;
};
