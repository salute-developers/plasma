import React from 'react';

import { BallFill as Icon16 } from '../Icon.assets.16/BallFill';
import { BallFill as Icon24 } from '../Icon.assets.24/BallFill';
import { BallFill as Icon36 } from '../Icon.assets.36/BallFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBallFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
