import React from 'react';

import { MessagePersonFill as Icon16 } from '../Icon.assets.16/MessagePersonFill';
import { MessagePersonFill as Icon24 } from '../Icon.assets.24/MessagePersonFill';
import { MessagePersonFill as Icon36 } from '../Icon.assets.36/MessagePersonFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessagePersonFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
