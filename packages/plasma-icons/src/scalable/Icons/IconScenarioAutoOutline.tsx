import React from 'react';

import { ScenarioAutoOutline as Icon16 } from '../Icon.assets.16/ScenarioAutoOutline';
import { ScenarioAutoOutline as Icon24 } from '../Icon.assets.24/ScenarioAutoOutline';
import { ScenarioAutoOutline as Icon36 } from '../Icon.assets.36/ScenarioAutoOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScenarioAutoOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
