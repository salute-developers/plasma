import React from 'react';

import { Percent } from '../Icon.assets/Percent';
import { IconRoot, IconProps } from '../IconRoot';

export const IconPercent = ({ size = 'xs', color, className }: IconProps) => (
    <IconRoot className={className} size={size} color={color} icon={Percent} />
);
