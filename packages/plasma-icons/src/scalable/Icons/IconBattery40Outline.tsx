import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconBattery40Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="battery40Outline" />;
};
