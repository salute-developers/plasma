import React from 'react';

import { SaluteFill as Icon16 } from '../Icon.assets.16/SaluteFill';
import { SaluteFill as Icon24 } from '../Icon.assets.24/SaluteFill';
import { SaluteFill as Icon36 } from '../Icon.assets.36/SaluteFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSaluteFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
