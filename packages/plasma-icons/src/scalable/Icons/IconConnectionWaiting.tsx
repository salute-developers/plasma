import React from 'react';

import { ConnectionWaiting as Icon16 } from '../Icon.assets.16/ConnectionWaiting';
import { ConnectionWaiting as Icon24 } from '../Icon.assets.24/ConnectionWaiting';
import { ConnectionWaiting as Icon36 } from '../Icon.assets.36/ConnectionWaiting';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconConnectionWaiting: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
