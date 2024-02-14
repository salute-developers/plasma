import React from 'react';

import { AddSmileFill as Icon16 } from '../Icon.assets.16/AddSmileFill';
import { AddSmileFill as Icon24 } from '../Icon.assets.24/AddSmileFill';
import { AddSmileFill as Icon36 } from '../Icon.assets.36/AddSmileFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAddSmileFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
