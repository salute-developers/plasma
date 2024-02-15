import React from 'react';

import { VolumeLevel0Fill as Icon16 } from '../Icon.assets.16/VolumeLevel0Fill';
import { VolumeLevel0Fill as Icon24 } from '../Icon.assets.24/VolumeLevel0Fill';
import { VolumeLevel0Fill as Icon36 } from '../Icon.assets.36/VolumeLevel0Fill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVolumeLevel0Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
