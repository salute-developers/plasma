import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconShareScreenMobileOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="shareScreenMobileOutline" />;
};
