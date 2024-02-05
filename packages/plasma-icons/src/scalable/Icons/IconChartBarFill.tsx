import React from 'react';

import { ChartBarFill as Icon16 } from '../Icon.assets.16/ChartBarFill';
import { ChartBarFill as Icon24 } from '../Icon.assets.24/ChartBarFill';
import { ChartBarFill as Icon36 } from '../Icon.assets.36/ChartBarFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChartBarFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
