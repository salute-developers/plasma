import React from 'react';

import { WhiteboardFill as Icon16 } from '../Icon.assets.16/WhiteboardFill';
import { WhiteboardFill as Icon24 } from '../Icon.assets.24/WhiteboardFill';
import { WhiteboardFill as Icon36 } from '../Icon.assets.36/WhiteboardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWhiteboardFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
