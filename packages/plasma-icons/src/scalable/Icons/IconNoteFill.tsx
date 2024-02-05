import React from 'react';

import { NoteFill as Icon16 } from '../Icon.assets.16/NoteFill';
import { NoteFill as Icon24 } from '../Icon.assets.24/NoteFill';
import { NoteFill as Icon36 } from '../Icon.assets.36/NoteFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNoteFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
