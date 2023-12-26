import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconContrast0Fill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} iconName="contrast0Fill" />;
};
