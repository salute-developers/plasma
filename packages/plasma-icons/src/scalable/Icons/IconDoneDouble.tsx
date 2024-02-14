import React from 'react';

import { DoneDouble as Icon16 } from '../Icon.assets.16/DoneDouble';
import { DoneDouble as Icon24 } from '../Icon.assets.24/DoneDouble';
import { DoneDouble as Icon36 } from '../Icon.assets.36/DoneDouble';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoneDouble: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
