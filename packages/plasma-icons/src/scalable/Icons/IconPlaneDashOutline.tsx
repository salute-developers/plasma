import React from 'react';

import { PlaneDashOutline as Icon16 } from '../Icon.assets.16/PlaneDashOutline';
import { PlaneDashOutline as Icon24 } from '../Icon.assets.24/PlaneDashOutline';
import { PlaneDashOutline as Icon36 } from '../Icon.assets.36/PlaneDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlaneDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
