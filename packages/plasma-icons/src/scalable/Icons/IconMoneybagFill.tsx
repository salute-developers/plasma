import React from 'react';

import { MoneybagFill as Icon16 } from '../Icon.assets.16/MoneybagFill';
import { MoneybagFill as Icon24 } from '../Icon.assets.24/MoneybagFill';
import { MoneybagFill as Icon36 } from '../Icon.assets.36/MoneybagFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMoneybagFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
