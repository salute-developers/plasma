import React from 'react';

import { BlurFill as Icon16 } from '../Icon.assets.16/BlurFill';
import { BlurFill as Icon24 } from '../Icon.assets.24/BlurFill';
import { BlurFill as Icon36 } from '../Icon.assets.36/BlurFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlurFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
