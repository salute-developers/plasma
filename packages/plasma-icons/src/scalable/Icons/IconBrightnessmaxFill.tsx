import React from 'react';

import { BrightnessmaxFill as Icon16 } from '../Icon.assets.16/BrightnessmaxFill';
import { BrightnessmaxFill as Icon24 } from '../Icon.assets.24/BrightnessmaxFill';
import { BrightnessmaxFill as Icon36 } from '../Icon.assets.36/BrightnessmaxFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBrightnessmaxFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
