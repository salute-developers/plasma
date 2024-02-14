import React from 'react';

import { ScenarioOutline as Icon16 } from '../Icon.assets.16/ScenarioOutline';
import { ScenarioOutline as Icon24 } from '../Icon.assets.24/ScenarioOutline';
import { ScenarioOutline as Icon36 } from '../Icon.assets.36/ScenarioOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScenarioOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
