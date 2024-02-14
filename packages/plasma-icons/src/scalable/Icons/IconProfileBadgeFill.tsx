import React from 'react';

import { ProfileBadgeFill as Icon16 } from '../Icon.assets.16/ProfileBadgeFill';
import { ProfileBadgeFill as Icon24 } from '../Icon.assets.24/ProfileBadgeFill';
import { ProfileBadgeFill as Icon36 } from '../Icon.assets.36/ProfileBadgeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileBadgeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
