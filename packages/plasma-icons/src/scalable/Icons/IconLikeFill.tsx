import React from 'react';

import { LikeFill as Icon16 } from '../Icon.assets.16/LikeFill';
import { LikeFill as Icon24 } from '../Icon.assets.24/LikeFill';
import { LikeFill as Icon36 } from '../Icon.assets.36/LikeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLikeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
