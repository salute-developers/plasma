import React from 'react';

import { SendFill as Icon16 } from '../Icon.assets.16/SendFill';
import { SendFill as Icon24 } from '../Icon.assets.24/SendFill';
import { SendFill as Icon36 } from '../Icon.assets.36/SendFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSendFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
