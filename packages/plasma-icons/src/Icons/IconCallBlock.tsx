import React from 'react';

import { CallBlock } from '../Icon.assets/CallBlock';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCallBlock: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={CallBlock} />;
};
