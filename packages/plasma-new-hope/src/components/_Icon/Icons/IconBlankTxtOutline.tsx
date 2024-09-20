import React from 'react';

import { BlankTxtOutline } from '../Icon.assets/BlankTxtOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconBlankTxtOutline: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={BlankTxtOutline} />;
};
