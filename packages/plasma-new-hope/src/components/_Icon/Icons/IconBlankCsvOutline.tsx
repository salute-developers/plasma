import React from 'react';

import { BlankCsvOutline } from '../Icon.assets/BlankCsvOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconBlankCsvOutline: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={BlankCsvOutline} />;
};
