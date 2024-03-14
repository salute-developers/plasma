import React from 'react';

import { Record } from '../Icon.assets/Record';
import { IconRoot, IconProps } from '../IconRoot';

export const IconRecord: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={Record} />;
};
