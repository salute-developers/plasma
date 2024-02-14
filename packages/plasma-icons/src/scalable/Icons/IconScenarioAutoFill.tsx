import React from 'react';

import { ScenarioAutoFill as Icon16 } from '../Icon.assets.16/ScenarioAutoFill';
import { ScenarioAutoFill as Icon24 } from '../Icon.assets.24/ScenarioAutoFill';
import { ScenarioAutoFill as Icon36 } from '../Icon.assets.36/ScenarioAutoFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScenarioAutoFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
