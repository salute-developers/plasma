import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconHourglassBotOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="hourglassBotOutline" />;
};
