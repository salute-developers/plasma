import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconBattery40Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="battery40Fill" />;
};
