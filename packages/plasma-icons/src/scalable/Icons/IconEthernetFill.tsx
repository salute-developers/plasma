import React from 'react';

import { EthernetFill as Icon16 } from '../Icon.assets.16/EthernetFill';
import { EthernetFill as Icon24 } from '../Icon.assets.24/EthernetFill';
import { EthernetFill as Icon36 } from '../Icon.assets.36/EthernetFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEthernetFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
