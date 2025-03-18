import React from 'react';

import { DoneCircleOutline } from '../Icon.assets/DoneCircleOutline';
import { IconRoot, IconProps } from '../IconRoot';

export const IconDoneCircleOutline: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={DoneCircleOutline} />;
};
