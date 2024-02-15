import React from 'react';

import { FileTextFill as Icon16 } from '../Icon.assets.16/FileTextFill';
import { FileTextFill as Icon24 } from '../Icon.assets.24/FileTextFill';
import { FileTextFill as Icon36 } from '../Icon.assets.36/FileTextFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFileTextFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
