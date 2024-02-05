import React from 'react';

import { ChartBarOutline as Icon16 } from '../Icon.assets.16/ChartBarOutline';
import { ChartBarOutline as Icon24 } from '../Icon.assets.24/ChartBarOutline';
import { ChartBarOutline as Icon36 } from '../Icon.assets.36/ChartBarOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChartBarOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
