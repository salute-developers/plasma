import React from 'react';

import { ArrowsMoveVertical } from '../Icon.assets/ArrowsMoveVertical';
import { IconRoot, IconProps } from '../IconRoot';

export const IconArrowsMoveVertical: React.FC<IconProps> = ({ size = 'xs', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon={ArrowsMoveVertical} />;
};
