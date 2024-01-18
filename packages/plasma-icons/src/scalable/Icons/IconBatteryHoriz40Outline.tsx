import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconBatteryHoriz40Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="batteryHoriz40Outline" />;
};
