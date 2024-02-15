import React from 'react';

import { StickerFill as Icon16 } from '../Icon.assets.16/StickerFill';
import { StickerFill as Icon24 } from '../Icon.assets.24/StickerFill';
import { StickerFill as Icon36 } from '../Icon.assets.36/StickerFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStickerFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
