import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconScene3dOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="scene3dOutline" />;
};
