import React from 'react';

import { VideoClipOutline as Icon16 } from '../Icon.assets.16/VideoClipOutline';
import { VideoClipOutline as Icon24 } from '../Icon.assets.24/VideoClipOutline';
import { VideoClipOutline as Icon36 } from '../Icon.assets.36/VideoClipOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVideoClipOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
