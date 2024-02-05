import React from 'react';

import { FullscreenOn as Icon16 } from '../Icon.assets.16/FullscreenOn';
import { FullscreenOn as Icon24 } from '../Icon.assets.24/FullscreenOn';
import { FullscreenOn as Icon36 } from '../Icon.assets.36/FullscreenOn';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFullscreenOn: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
