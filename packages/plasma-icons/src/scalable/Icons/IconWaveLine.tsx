import React from 'react';

import { WaveLine as Icon16 } from '../Icon.assets.16/WaveLine';
import { WaveLine as Icon24 } from '../Icon.assets.24/WaveLine';
import { WaveLine as Icon36 } from '../Icon.assets.36/WaveLine';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWaveLine: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
