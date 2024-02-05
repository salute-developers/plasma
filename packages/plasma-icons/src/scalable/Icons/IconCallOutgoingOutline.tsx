import React from 'react';

import { CallOutgoingOutline as Icon16 } from '../Icon.assets.16/CallOutgoingOutline';
import { CallOutgoingOutline as Icon24 } from '../Icon.assets.24/CallOutgoingOutline';
import { CallOutgoingOutline as Icon36 } from '../Icon.assets.36/CallOutgoingOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallOutgoingOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
