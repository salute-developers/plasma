import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconTravelCarFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="travelCarFill" />;
};
