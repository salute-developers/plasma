import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconChartDistributionFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="chartDistributionFill" />;
};
