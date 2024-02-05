import React from 'react';

import { RubleFill as Icon16 } from '../Icon.assets.16/RubleFill';
import { RubleFill as Icon24 } from '../Icon.assets.24/RubleFill';
import { RubleFill as Icon36 } from '../Icon.assets.36/RubleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRubleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
