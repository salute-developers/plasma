import React from 'react';

import { MegaphoneLoudFill as Icon16 } from '../Icon.assets.16/MegaphoneLoudFill';
import { MegaphoneLoudFill as Icon24 } from '../Icon.assets.24/MegaphoneLoudFill';
import { MegaphoneLoudFill as Icon36 } from '../Icon.assets.36/MegaphoneLoudFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMegaphoneLoudFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
