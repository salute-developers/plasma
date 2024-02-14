import React from 'react';

import { SberboxTimeFill as Icon16 } from '../Icon.assets.16/SberboxTimeFill';
import { SberboxTimeFill as Icon24 } from '../Icon.assets.24/SberboxTimeFill';
import { SberboxTimeFill as Icon36 } from '../Icon.assets.36/SberboxTimeFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboxTimeFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
