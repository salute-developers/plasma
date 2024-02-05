import React from 'react';

import { VolumeLevel3Outline as Icon16 } from '../Icon.assets.16/VolumeLevel3Outline';
import { VolumeLevel3Outline as Icon24 } from '../Icon.assets.24/VolumeLevel3Outline';
import { VolumeLevel3Outline as Icon36 } from '../Icon.assets.36/VolumeLevel3Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVolumeLevel3Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
