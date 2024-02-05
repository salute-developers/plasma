import React from 'react';

import { TagBadgeFill as Icon16 } from '../Icon.assets.16/TagBadgeFill';
import { TagBadgeFill as Icon24 } from '../Icon.assets.24/TagBadgeFill';
import { TagBadgeFill as Icon36 } from '../Icon.assets.36/TagBadgeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTagBadgeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
