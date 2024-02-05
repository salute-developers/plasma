import React from 'react';

import { BlockFill as Icon16 } from '../Icon.assets.16/BlockFill';
import { BlockFill as Icon24 } from '../Icon.assets.24/BlockFill';
import { BlockFill as Icon36 } from '../Icon.assets.36/BlockFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlockFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
