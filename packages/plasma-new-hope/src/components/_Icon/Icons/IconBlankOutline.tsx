import React from 'react';

import { BlankOutline } from '../Icon.assets/BlankOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconBlankOutline: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={BlankOutline} />;
};
