import React from 'react';

import { TrashFill as Icon16 } from '../Icon.assets.16/TrashFill';
import { TrashFill as Icon24 } from '../Icon.assets.24/TrashFill';
import { TrashFill as Icon36 } from '../Icon.assets.36/TrashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTrashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
