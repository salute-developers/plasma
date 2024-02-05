import React from 'react';

import { VideoProcessOutline as Icon16 } from '../Icon.assets.16/VideoProcessOutline';
import { VideoProcessOutline as Icon24 } from '../Icon.assets.24/VideoProcessOutline';
import { VideoProcessOutline as Icon36 } from '../Icon.assets.36/VideoProcessOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVideoProcessOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
