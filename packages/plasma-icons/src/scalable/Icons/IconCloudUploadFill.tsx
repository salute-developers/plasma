import React from 'react';

import { CloudUploadFill as Icon16 } from '../Icon.assets.16/CloudUploadFill';
import { CloudUploadFill as Icon24 } from '../Icon.assets.24/CloudUploadFill';
import { CloudUploadFill as Icon36 } from '../Icon.assets.36/CloudUploadFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloudUploadFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
