import React from 'react';

import { VolumeLevel1Fill as Icon16 } from '../Icon.assets.16/VolumeLevel1Fill';
import { VolumeLevel1Fill as Icon24 } from '../Icon.assets.24/VolumeLevel1Fill';
import { VolumeLevel1Fill as Icon36 } from '../Icon.assets.36/VolumeLevel1Fill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVolumeLevel1Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
