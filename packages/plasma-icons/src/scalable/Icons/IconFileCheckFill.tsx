import React from 'react';

import { FileCheckFill as Icon16 } from '../Icon.assets.16/FileCheckFill';
import { FileCheckFill as Icon24 } from '../Icon.assets.24/FileCheckFill';
import { FileCheckFill as Icon36 } from '../Icon.assets.36/FileCheckFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFileCheckFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
