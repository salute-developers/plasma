import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconVideoQuality4K: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="videoQuality4K" />;
};
