import React from 'react';

import { DropFill as Icon16 } from '../Icon.assets.16/DropFill';
import { DropFill as Icon24 } from '../Icon.assets.24/DropFill';
import { DropFill as Icon36 } from '../Icon.assets.36/DropFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDropFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
