import React from 'react';

import { TranscribeTextVoiceOutline as Icon16 } from '../Icon.assets.16/TranscribeTextVoiceOutline';
import { TranscribeTextVoiceOutline as Icon24 } from '../Icon.assets.24/TranscribeTextVoiceOutline';
import { TranscribeTextVoiceOutline as Icon36 } from '../Icon.assets.36/TranscribeTextVoiceOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTranscribeTextVoiceOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
