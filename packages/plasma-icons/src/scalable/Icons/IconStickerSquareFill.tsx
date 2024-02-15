import React from 'react';

import { StickerSquareFill as Icon16 } from '../Icon.assets.16/StickerSquareFill';
import { StickerSquareFill as Icon24 } from '../Icon.assets.24/StickerSquareFill';
import { StickerSquareFill as Icon36 } from '../Icon.assets.36/StickerSquareFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStickerSquareFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
