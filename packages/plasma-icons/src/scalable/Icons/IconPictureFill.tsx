import React from 'react';

import { PictureFill as Icon16 } from '../Icon.assets.16/PictureFill';
import { PictureFill as Icon24 } from '../Icon.assets.24/PictureFill';
import { PictureFill as Icon36 } from '../Icon.assets.36/PictureFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPictureFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
