import React from 'react';

import { TranscriptionVoiceTextOutline as Icon16 } from '../Icon.assets.16/TranscriptionVoiceTextOutline';
import { TranscriptionVoiceTextOutline as Icon24 } from '../Icon.assets.24/TranscriptionVoiceTextOutline';
import { TranscriptionVoiceTextOutline as Icon36 } from '../Icon.assets.36/TranscriptionVoiceTextOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTranscriptionVoiceTextOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
