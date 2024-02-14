import React from 'react';

import { SberboxTopFill as Icon16 } from '../Icon.assets.16/SberboxTopFill';
import { SberboxTopFill as Icon24 } from '../Icon.assets.24/SberboxTopFill';
import { SberboxTopFill as Icon36 } from '../Icon.assets.36/SberboxTopFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboxTopFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
