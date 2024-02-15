import React from 'react';

import { Close as Icon16 } from '../Icon.assets.16/Close';
import { Close as Icon24 } from '../Icon.assets.24/Close';
import { Close as Icon36 } from '../Icon.assets.36/Close';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconClose: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
