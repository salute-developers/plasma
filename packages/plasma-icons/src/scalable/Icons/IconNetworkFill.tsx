import React from 'react';

import { NetworkFill as Icon16 } from '../Icon.assets.16/NetworkFill';
import { NetworkFill as Icon24 } from '../Icon.assets.24/NetworkFill';
import { NetworkFill as Icon36 } from '../Icon.assets.36/NetworkFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNetworkFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
