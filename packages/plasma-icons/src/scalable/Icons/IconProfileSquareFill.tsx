import React from 'react';

import { ProfileSquareFill as Icon16 } from '../Icon.assets.16/ProfileSquareFill';
import { ProfileSquareFill as Icon24 } from '../Icon.assets.24/ProfileSquareFill';
import { ProfileSquareFill as Icon36 } from '../Icon.assets.36/ProfileSquareFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileSquareFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
