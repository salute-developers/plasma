import React from 'react';

import { Download as Icon16 } from '../Icon.assets.16/Download';
import { Download as Icon24 } from '../Icon.assets.24/Download';
import { Download as Icon36 } from '../Icon.assets.36/Download';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDownload: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
