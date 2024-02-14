import React from 'react';

import { CallDashFill as Icon16 } from '../Icon.assets.16/CallDashFill';
import { CallDashFill as Icon24 } from '../Icon.assets.24/CallDashFill';
import { CallDashFill as Icon36 } from '../Icon.assets.36/CallDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallDashFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
