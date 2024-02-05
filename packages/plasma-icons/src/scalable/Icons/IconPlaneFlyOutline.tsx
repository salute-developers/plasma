import React from 'react';

import { PlaneFlyOutline as Icon16 } from '../Icon.assets.16/PlaneFlyOutline';
import { PlaneFlyOutline as Icon24 } from '../Icon.assets.24/PlaneFlyOutline';
import { PlaneFlyOutline as Icon36 } from '../Icon.assets.36/PlaneFlyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlaneFlyOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
