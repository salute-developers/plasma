import React from 'react';

import { ChartPieFill as Icon16 } from '../Icon.assets.16/ChartPieFill';
import { ChartPieFill as Icon24 } from '../Icon.assets.24/ChartPieFill';
import { ChartPieFill as Icon36 } from '../Icon.assets.36/ChartPieFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChartPieFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
