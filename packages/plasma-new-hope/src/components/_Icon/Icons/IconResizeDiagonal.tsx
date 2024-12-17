import React from 'react';

import { ResizeDiagonal } from '../Icon.assets/ResizeDiagonal';
import { IconRoot, IconProps } from '../IconRoot';

export const IconResizeDiagonal: React.FC<IconProps> = ({ size = 's', color, className, ...rest }) => {
    return <IconRoot className={className} size={size} color={color} icon={ResizeDiagonal} {...rest} />;
};
