import React from 'react';

import { SberAlt } from '../Icon.assets/SberAlt';
import { IconRoot, IconProps } from '../IconRoot';

export const IconSberAlt: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={SberAlt} />;
};
