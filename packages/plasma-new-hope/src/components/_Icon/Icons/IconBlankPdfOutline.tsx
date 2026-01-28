import React from 'react';

import { BlankPdfOutline } from '../Icon.assets/BlankPdfOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconBlankPdfOutline: React.FC<IconProps> = ({ size = 'xs', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={BlankPdfOutline} {...rest} />;
};
