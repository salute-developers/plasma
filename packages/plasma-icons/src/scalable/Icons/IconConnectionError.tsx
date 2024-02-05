import React from 'react';

import { ConnectionError as Icon16 } from '../Icon.assets.16/ConnectionError';
import { ConnectionError as Icon24 } from '../Icon.assets.24/ConnectionError';
import { ConnectionError as Icon36 } from '../Icon.assets.36/ConnectionError';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconConnectionError: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
