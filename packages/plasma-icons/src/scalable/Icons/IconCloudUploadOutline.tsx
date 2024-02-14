import React from 'react';

import { CloudUploadOutline as Icon16 } from '../Icon.assets.16/CloudUploadOutline';
import { CloudUploadOutline as Icon24 } from '../Icon.assets.24/CloudUploadOutline';
import { CloudUploadOutline as Icon36 } from '../Icon.assets.36/CloudUploadOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloudUploadOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
