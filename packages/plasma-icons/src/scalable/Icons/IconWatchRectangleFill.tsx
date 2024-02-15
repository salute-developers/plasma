import React from 'react';

import { WatchRectangleFill as Icon16 } from '../Icon.assets.16/WatchRectangleFill';
import { WatchRectangleFill as Icon24 } from '../Icon.assets.24/WatchRectangleFill';
import { WatchRectangleFill as Icon36 } from '../Icon.assets.36/WatchRectangleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWatchRectangleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
