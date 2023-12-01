import React from 'react';

import { Silhouette } from './Icon.assets/Silhouette';
import { IconRoot, IconProps } from './IconRoot';

export const IconSilhouette: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={Silhouette} />;
};
