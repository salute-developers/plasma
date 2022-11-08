import React from 'react';

import { CallMissedFill } from '../Icon.assets/CallMissedFill';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCallMissedFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={CallMissedFill} />;
};
