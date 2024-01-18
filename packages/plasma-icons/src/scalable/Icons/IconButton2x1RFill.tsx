import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconButton2x1RFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="button2x1RFill" />;
};
