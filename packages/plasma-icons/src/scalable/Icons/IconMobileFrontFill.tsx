import React from 'react';

import { MobileFrontFill as Icon16 } from '../Icon.assets.16/MobileFrontFill';
import { MobileFrontFill as Icon24 } from '../Icon.assets.24/MobileFrontFill';
import { MobileFrontFill as Icon36 } from '../Icon.assets.36/MobileFrontFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobileFrontFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
