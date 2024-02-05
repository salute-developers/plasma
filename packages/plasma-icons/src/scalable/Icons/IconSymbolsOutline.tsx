import React from 'react';

import { SymbolsOutline as Icon16 } from '../Icon.assets.16/SymbolsOutline';
import { SymbolsOutline as Icon24 } from '../Icon.assets.24/SymbolsOutline';
import { SymbolsOutline as Icon36 } from '../Icon.assets.36/SymbolsOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSymbolsOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
