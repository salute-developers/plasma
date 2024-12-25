import React from 'react';

import { SaluteOutline } from '../../Icon.assets/Icon.svg.16/SaluteOutline';
import { IconRoot, IconProps } from '../../IconRoot';

export const IconSaluteOutline16: React.FC<IconProps> = ({ size = 'xs', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={SaluteOutline} {...rest} />;
};
