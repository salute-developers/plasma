import React from 'react';

import { PlaneFlyFill as Icon16 } from '../Icon.assets.16/PlaneFlyFill';
import { PlaneFlyFill as Icon24 } from '../Icon.assets.24/PlaneFlyFill';
import { PlaneFlyFill as Icon36 } from '../Icon.assets.36/PlaneFlyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlaneFlyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
