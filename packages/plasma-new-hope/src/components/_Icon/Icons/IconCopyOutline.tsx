import React from 'react';

import { CopyOutline } from '../Icon.assets/CopyOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconCopyOutline: React.FC<IconProps> = ({ size = 's', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={CopyOutline} {...rest} />;
};
