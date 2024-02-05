import React from 'react';

import { QRCode as Icon16 } from '../Icon.assets.16/QRCode';
import { QRCode as Icon24 } from '../Icon.assets.24/QRCode';
import { QRCode as Icon36 } from '../Icon.assets.36/QRCode';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconQRCode: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
