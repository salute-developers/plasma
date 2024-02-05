import React from 'react';

import { CardstackHorizFill as Icon16 } from '../Icon.assets.16/CardstackHorizFill';
import { CardstackHorizFill as Icon24 } from '../Icon.assets.24/CardstackHorizFill';
import { CardstackHorizFill as Icon36 } from '../Icon.assets.36/CardstackHorizFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardstackHorizFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
