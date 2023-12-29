import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconCrownFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="crownFill" />;
};
