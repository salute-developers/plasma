import React from 'react';

import { VideoClipFill as Icon16 } from '../Icon.assets.16/VideoClipFill';
import { VideoClipFill as Icon24 } from '../Icon.assets.24/VideoClipFill';
import { VideoClipFill as Icon36 } from '../Icon.assets.36/VideoClipFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVideoClipFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
