import React from 'react';

import { Sber } from '../Icon.assets/Sber';
import { IconRoot, IconProps } from '../IconRoot';

export const IconSber: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={Sber} />;
};
