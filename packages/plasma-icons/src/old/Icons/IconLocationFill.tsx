import React from 'react';

import { LocationFill } from '../Icon.assets/LocationFill';
import { IconRoot, IconProps } from '../IconRoot';

export const IconLocationFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={LocationFill} />;
};
