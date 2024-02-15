import React from 'react';

import { SyncProblem as Icon16 } from '../Icon.assets.16/SyncProblem';
import { SyncProblem as Icon24 } from '../Icon.assets.24/SyncProblem';
import { SyncProblem as Icon36 } from '../Icon.assets.36/SyncProblem';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSyncProblem: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
