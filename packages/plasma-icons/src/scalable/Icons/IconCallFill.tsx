import React from 'react';

import { CallFill as Icon16 } from '../Icon.assets.16/CallFill';
import { CallFill as Icon24 } from '../Icon.assets.24/CallFill';
import { CallFill as Icon36 } from '../Icon.assets.36/CallFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
