import React from 'react';

import { WhiteboardOutline as Icon16 } from '../Icon.assets.16/WhiteboardOutline';
import { WhiteboardOutline as Icon24 } from '../Icon.assets.24/WhiteboardOutline';
import { WhiteboardOutline as Icon36 } from '../Icon.assets.36/WhiteboardOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWhiteboardOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
