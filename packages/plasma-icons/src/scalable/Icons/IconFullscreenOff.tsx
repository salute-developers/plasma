import React from 'react';

import { FullscreenOff as Icon16 } from '../Icon.assets.16/FullscreenOff';
import { FullscreenOff as Icon24 } from '../Icon.assets.24/FullscreenOff';
import { FullscreenOff as Icon36 } from '../Icon.assets.36/FullscreenOff';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFullscreenOff: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
