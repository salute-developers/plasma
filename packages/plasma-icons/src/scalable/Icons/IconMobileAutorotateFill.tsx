import React from 'react';

import { MobileAutorotateFill as Icon16 } from '../Icon.assets.16/MobileAutorotateFill';
import { MobileAutorotateFill as Icon24 } from '../Icon.assets.24/MobileAutorotateFill';
import { MobileAutorotateFill as Icon36 } from '../Icon.assets.36/MobileAutorotateFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobileAutorotateFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
