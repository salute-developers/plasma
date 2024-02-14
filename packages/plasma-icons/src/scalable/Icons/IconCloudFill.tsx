import React from 'react';

import { CloudFill as Icon16 } from '../Icon.assets.16/CloudFill';
import { CloudFill as Icon24 } from '../Icon.assets.24/CloudFill';
import { CloudFill as Icon36 } from '../Icon.assets.36/CloudFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloudFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
