import React from 'react';

import { ShareScreenMobileFill as Icon16 } from '../Icon.assets.16/ShareScreenMobileFill';
import { ShareScreenMobileFill as Icon24 } from '../Icon.assets.24/ShareScreenMobileFill';
import { ShareScreenMobileFill as Icon36 } from '../Icon.assets.36/ShareScreenMobileFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShareScreenMobileFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
