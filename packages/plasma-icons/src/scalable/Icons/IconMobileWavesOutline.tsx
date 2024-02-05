import React from 'react';

import { MobileWavesOutline as Icon16 } from '../Icon.assets.16/MobileWavesOutline';
import { MobileWavesOutline as Icon24 } from '../Icon.assets.24/MobileWavesOutline';
import { MobileWavesOutline as Icon36 } from '../Icon.assets.36/MobileWavesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobileWavesOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
