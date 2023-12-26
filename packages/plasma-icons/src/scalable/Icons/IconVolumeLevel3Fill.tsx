import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconVolumeLevel3Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="volumeLevel3Fill" />;
};
