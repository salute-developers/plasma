import React from 'react';

import { TranscriptionVoiceTextErrorOutline as Icon16 } from '../Icon.assets.16/TranscriptionVoiceTextErrorOutline';
import { TranscriptionVoiceTextErrorOutline as Icon24 } from '../Icon.assets.24/TranscriptionVoiceTextErrorOutline';
import { TranscriptionVoiceTextErrorOutline as Icon36 } from '../Icon.assets.36/TranscriptionVoiceTextErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTranscriptionVoiceTextErrorOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
