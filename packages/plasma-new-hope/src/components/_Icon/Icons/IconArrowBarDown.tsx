import React from 'react';

import { ArrowBarDown } from '../Icon.assets/ArrowBarDown';
import { IconRoot, IconProps } from '../IconRoot';

export const IconArrowBarDown: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={ArrowBarDown} />;
};
