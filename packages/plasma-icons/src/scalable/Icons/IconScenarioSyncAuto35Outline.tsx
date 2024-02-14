import React from 'react';

import { ScenarioSyncAuto35Outline as Icon16 } from '../Icon.assets.16/ScenarioSyncAuto35Outline';
import { ScenarioSyncAuto35Outline as Icon24 } from '../Icon.assets.24/ScenarioSyncAuto35Outline';
import { ScenarioSyncAuto35Outline as Icon36 } from '../Icon.assets.36/ScenarioSyncAuto35Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScenarioSyncAuto35Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
