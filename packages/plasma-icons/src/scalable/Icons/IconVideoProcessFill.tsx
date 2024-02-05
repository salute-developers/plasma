import React from 'react';

import { VideoProcessFill as Icon16 } from '../Icon.assets.16/VideoProcessFill';
import { VideoProcessFill as Icon24 } from '../Icon.assets.24/VideoProcessFill';
import { VideoProcessFill as Icon36 } from '../Icon.assets.36/VideoProcessFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVideoProcessFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
