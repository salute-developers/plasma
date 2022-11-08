import React from 'react';

import { CallIncomingFill } from '../Icon.assets/CallIncomingFill';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCallIncomingFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={CallIncomingFill} />;
};
