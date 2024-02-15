import React from 'react';

import { StickerSquareOutline as Icon16 } from '../Icon.assets.16/StickerSquareOutline';
import { StickerSquareOutline as Icon24 } from '../Icon.assets.24/StickerSquareOutline';
import { StickerSquareOutline as Icon36 } from '../Icon.assets.36/StickerSquareOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStickerSquareOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
