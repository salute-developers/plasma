import React from 'react';

import { MessageRequestFill as Icon16 } from '../Icon.assets.16/MessageRequestFill';
import { MessageRequestFill as Icon24 } from '../Icon.assets.24/MessageRequestFill';
import { MessageRequestFill as Icon36 } from '../Icon.assets.36/MessageRequestFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageRequestFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
