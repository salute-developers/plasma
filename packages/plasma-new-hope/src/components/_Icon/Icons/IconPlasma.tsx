import React from 'react';

import { Plasma } from '../Icon.assets/Plasma';
import { IconRoot, IconProps } from '../IconRoot';

export const IconPlasma: React.FC<IconProps> = ({ size = 's', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={Plasma} {...rest} />;
};
