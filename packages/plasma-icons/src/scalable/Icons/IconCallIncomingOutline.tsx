import React from 'react';

import { CallIncomingOutline as Icon16 } from '../Icon.assets.16/CallIncomingOutline';
import { CallIncomingOutline as Icon24 } from '../Icon.assets.24/CallIncomingOutline';
import { CallIncomingOutline as Icon36 } from '../Icon.assets.36/CallIncomingOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallIncomingOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
