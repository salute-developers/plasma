import React from 'react';

import { MessageVideoFill as Icon16 } from '../Icon.assets.16/MessageVideoFill';
import { MessageVideoFill as Icon24 } from '../Icon.assets.24/MessageVideoFill';
import { MessageVideoFill as Icon36 } from '../Icon.assets.36/MessageVideoFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageVideoFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
