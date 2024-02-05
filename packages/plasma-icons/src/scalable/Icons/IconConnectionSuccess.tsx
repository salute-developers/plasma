import React from 'react';

import { ConnectionSuccess as Icon16 } from '../Icon.assets.16/ConnectionSuccess';
import { ConnectionSuccess as Icon24 } from '../Icon.assets.24/ConnectionSuccess';
import { ConnectionSuccess as Icon36 } from '../Icon.assets.36/ConnectionSuccess';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconConnectionSuccess: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
