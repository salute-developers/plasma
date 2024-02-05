import React from 'react';

import { CallDashOutline as Icon16 } from '../Icon.assets.16/CallDashOutline';
import { CallDashOutline as Icon24 } from '../Icon.assets.24/CallDashOutline';
import { CallDashOutline as Icon36 } from '../Icon.assets.36/CallDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
