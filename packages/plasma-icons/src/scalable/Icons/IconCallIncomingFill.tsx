import React from 'react';

import { CallIncomingFill as Icon16 } from '../Icon.assets.16/CallIncomingFill';
import { CallIncomingFill as Icon24 } from '../Icon.assets.24/CallIncomingFill';
import { CallIncomingFill as Icon36 } from '../Icon.assets.36/CallIncomingFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallIncomingFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
