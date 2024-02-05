import React from 'react';

import { CallMissedOutline as Icon16 } from '../Icon.assets.16/CallMissedOutline';
import { CallMissedOutline as Icon24 } from '../Icon.assets.24/CallMissedOutline';
import { CallMissedOutline as Icon36 } from '../Icon.assets.36/CallMissedOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallMissedOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
