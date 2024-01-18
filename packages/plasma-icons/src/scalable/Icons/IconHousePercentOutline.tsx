import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconHousePercentOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="housePercentOutline" />;
};
