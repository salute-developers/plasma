import React from 'react';

import { BellDoneFill as Icon16 } from '../Icon.assets.16/BellDoneFill';
import { BellDoneFill as Icon24 } from '../Icon.assets.24/BellDoneFill';
import { BellDoneFill as Icon36 } from '../Icon.assets.36/BellDoneFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBellDoneFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
