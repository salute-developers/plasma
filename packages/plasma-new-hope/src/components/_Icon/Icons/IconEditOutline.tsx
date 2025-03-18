import React from 'react';

import { EditOutline } from '../Icon.assets/EditOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconEditOutline: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={EditOutline} />;
};
