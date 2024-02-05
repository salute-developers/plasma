import React from 'react';

import { DislikeFill as Icon16 } from '../Icon.assets.16/DislikeFill';
import { DislikeFill as Icon24 } from '../Icon.assets.24/DislikeFill';
import { DislikeFill as Icon36 } from '../Icon.assets.36/DislikeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDislikeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
