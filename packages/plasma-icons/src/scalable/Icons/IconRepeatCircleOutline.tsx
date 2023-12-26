import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconRepeatCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="repeatCircleOutline" />;
};
