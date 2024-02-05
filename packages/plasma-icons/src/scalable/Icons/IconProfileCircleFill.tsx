import React from 'react';

import { ProfileCircleFill as Icon16 } from '../Icon.assets.16/ProfileCircleFill';
import { ProfileCircleFill as Icon24 } from '../Icon.assets.24/ProfileCircleFill';
import { ProfileCircleFill as Icon36 } from '../Icon.assets.36/ProfileCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
