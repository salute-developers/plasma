import React from 'react';

import { ViewfinderQRCode as Icon16 } from '../Icon.assets.16/ViewfinderQRCode';
import { ViewfinderQRCode as Icon24 } from '../Icon.assets.24/ViewfinderQRCode';
import { ViewfinderQRCode as Icon36 } from '../Icon.assets.36/ViewfinderQRCode';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewfinderQRCode: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
