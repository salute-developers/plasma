import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconStopFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="stopFill" />;
};
