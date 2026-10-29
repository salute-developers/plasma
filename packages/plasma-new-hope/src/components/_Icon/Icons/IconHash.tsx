import React from 'react';

import { Hash } from '../Icon.assets/Hash';
import { IconRoot, IconProps } from '../IconRoot';

export const IconHash = ({ size = 'xs', color, className }: IconProps) => (
    <IconRoot className={className} size={size} color={color} icon={Hash} />
);
