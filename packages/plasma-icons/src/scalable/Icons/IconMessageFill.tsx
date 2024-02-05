import React from 'react';

import { MessageFill as Icon16 } from '../Icon.assets.16/MessageFill';
import { MessageFill as Icon24 } from '../Icon.assets.24/MessageFill';
import { MessageFill as Icon36 } from '../Icon.assets.36/MessageFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
