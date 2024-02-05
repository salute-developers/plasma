import React from 'react';

import { MessageAltFill as Icon16 } from '../Icon.assets.16/MessageAltFill';
import { MessageAltFill as Icon24 } from '../Icon.assets.24/MessageAltFill';
import { MessageAltFill as Icon36 } from '../Icon.assets.36/MessageAltFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageAltFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
