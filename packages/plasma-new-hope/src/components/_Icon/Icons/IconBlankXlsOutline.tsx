import React from 'react';

import { BlankXlsOutline } from '../Icon.assets/BlankXlsOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconBlankXlsOutline: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={BlankXlsOutline} />;
};
