import React from 'react';

import { MegaphoneFill as Icon16 } from '../Icon.assets.16/MegaphoneFill';
import { MegaphoneFill as Icon24 } from '../Icon.assets.24/MegaphoneFill';
import { MegaphoneFill as Icon36 } from '../Icon.assets.36/MegaphoneFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMegaphoneFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
