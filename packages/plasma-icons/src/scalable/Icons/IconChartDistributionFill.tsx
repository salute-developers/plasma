import React from 'react';

import { ChartDistributionFill as Icon16 } from '../Icon.assets.16/ChartDistributionFill';
import { ChartDistributionFill as Icon24 } from '../Icon.assets.24/ChartDistributionFill';
import { ChartDistributionFill as Icon36 } from '../Icon.assets.36/ChartDistributionFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChartDistributionFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
