import React from 'react';

import { ObjectsSymbolsOutline as Icon16 } from '../Icon.assets.16/ObjectsSymbolsOutline';
import { ObjectsSymbolsOutline as Icon24 } from '../Icon.assets.24/ObjectsSymbolsOutline';
import { ObjectsSymbolsOutline as Icon36 } from '../Icon.assets.36/ObjectsSymbolsOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconObjectsSymbolsOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
