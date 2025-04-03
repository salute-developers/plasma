import React from 'react';

import { FilterFunnel } from '../Icon.assets/FilterFunnel';
import { IconRoot, IconProps } from '../IconRoot';

export const IconFilterFunnel: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={FilterFunnel} />;
};
