import React from 'react';

import { BlankDocOutline } from '../Icon.assets/BlankDocOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconBlankDocOutline: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={BlankDocOutline} />;
};
