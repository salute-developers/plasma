import React from 'react';

import { MobileWavesFill as Icon16 } from '../Icon.assets.16/MobileWavesFill';
import { MobileWavesFill as Icon24 } from '../Icon.assets.24/MobileWavesFill';
import { MobileWavesFill as Icon36 } from '../Icon.assets.36/MobileWavesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobileWavesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
