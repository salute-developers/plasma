import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconRegionalFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="regionalFill" />;
};
