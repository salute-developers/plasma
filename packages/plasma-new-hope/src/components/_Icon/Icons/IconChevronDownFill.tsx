import React from 'react';

import { ChevronDownFill } from '../Icon.assets/ChevronDownFill';
import { IconRoot, IconProps } from '../IconRoot';

export const IconChevronDownFill: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={ChevronDownFill} />;
};
