import React from 'react';

import { CloudDownloadOutline as Icon16 } from '../Icon.assets.16/CloudDownloadOutline';
import { CloudDownloadOutline as Icon24 } from '../Icon.assets.24/CloudDownloadOutline';
import { CloudDownloadOutline as Icon36 } from '../Icon.assets.36/CloudDownloadOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloudDownloadOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
