import React from 'react';

import { ResetOutline } from '../Icon.assets/ResetOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconResetOutline: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={ResetOutline} />;
};
