import React from 'react';

import { VideoQuality4K as Icon16 } from '../Icon.assets.16/VideoQuality4K';
import { VideoQuality4K as Icon24 } from '../Icon.assets.24/VideoQuality4K';
import { VideoQuality4K as Icon36 } from '../Icon.assets.36/VideoQuality4K';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVideoQuality4K: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
