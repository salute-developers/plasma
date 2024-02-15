import React from 'react';

import { WhistleFill as Icon16 } from '../Icon.assets.16/WhistleFill';
import { WhistleFill as Icon24 } from '../Icon.assets.24/WhistleFill';
import { WhistleFill as Icon36 } from '../Icon.assets.36/WhistleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWhistleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
