import React from 'react';

import { MessageOutline as Icon16 } from '../Icon.assets.16/MessageOutline';
import { MessageOutline as Icon24 } from '../Icon.assets.24/MessageOutline';
import { MessageOutline as Icon36 } from '../Icon.assets.36/MessageOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
