import React from 'react';

import { Text as Icon16 } from '../Icon.assets.16/Text';
import { Text as Icon24 } from '../Icon.assets.24/Text';
import { Text as Icon36 } from '../Icon.assets.36/Text';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconText: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
