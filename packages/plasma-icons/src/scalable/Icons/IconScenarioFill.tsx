import React from 'react';

import { ScenarioFill as Icon16 } from '../Icon.assets.16/ScenarioFill';
import { ScenarioFill as Icon24 } from '../Icon.assets.24/ScenarioFill';
import { ScenarioFill as Icon36 } from '../Icon.assets.36/ScenarioFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScenarioFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
