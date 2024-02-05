import React from 'react';

import { WavesCross as Icon16 } from '../Icon.assets.16/WavesCross';
import { WavesCross as Icon24 } from '../Icon.assets.24/WavesCross';
import { WavesCross as Icon36 } from '../Icon.assets.36/WavesCross';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWavesCross: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
