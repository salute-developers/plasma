import React from 'react';

import { PictureCopyFill as Icon16 } from '../Icon.assets.16/PictureCopyFill';
import { PictureCopyFill as Icon24 } from '../Icon.assets.24/PictureCopyFill';
import { PictureCopyFill as Icon36 } from '../Icon.assets.36/PictureCopyFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPictureCopyFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
