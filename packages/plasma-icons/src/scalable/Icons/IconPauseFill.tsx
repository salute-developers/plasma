import React from 'react';

import { PauseFill as Icon16 } from '../Icon.assets.16/PauseFill';
import { PauseFill as Icon24 } from '../Icon.assets.24/PauseFill';
import { PauseFill as Icon36 } from '../Icon.assets.36/PauseFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPauseFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
