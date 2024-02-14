import React from 'react';

import { UploadOutline as Icon16 } from '../Icon.assets.16/UploadOutline';
import { UploadOutline as Icon24 } from '../Icon.assets.24/UploadOutline';
import { UploadOutline as Icon36 } from '../Icon.assets.36/UploadOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconUploadOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
