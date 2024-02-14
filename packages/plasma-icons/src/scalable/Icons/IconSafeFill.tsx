import React from 'react';

import { SafeFill as Icon16 } from '../Icon.assets.16/SafeFill';
import { SafeFill as Icon24 } from '../Icon.assets.24/SafeFill';
import { SafeFill as Icon36 } from '../Icon.assets.36/SafeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSafeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
