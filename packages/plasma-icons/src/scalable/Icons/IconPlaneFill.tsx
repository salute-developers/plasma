import React from 'react';

import { PlaneFill as Icon16 } from '../Icon.assets.16/PlaneFill';
import { PlaneFill as Icon24 } from '../Icon.assets.24/PlaneFill';
import { PlaneFill as Icon36 } from '../Icon.assets.36/PlaneFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlaneFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
