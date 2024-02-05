import React from 'react';

import { MailWavesOutline as Icon16 } from '../Icon.assets.16/MailWavesOutline';
import { MailWavesOutline as Icon24 } from '../Icon.assets.24/MailWavesOutline';
import { MailWavesOutline as Icon36 } from '../Icon.assets.36/MailWavesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMailWavesOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
