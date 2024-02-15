import React from 'react';

import { ChartDistributionOutline as Icon16 } from '../Icon.assets.16/ChartDistributionOutline';
import { ChartDistributionOutline as Icon24 } from '../Icon.assets.24/ChartDistributionOutline';
import { ChartDistributionOutline as Icon36 } from '../Icon.assets.36/ChartDistributionOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChartDistributionOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
