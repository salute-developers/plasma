import React from 'react';

import { TranscribeTextVoiceErrorFill as Icon16 } from '../Icon.assets.16/TranscribeTextVoiceErrorFill';
import { TranscribeTextVoiceErrorFill as Icon24 } from '../Icon.assets.24/TranscribeTextVoiceErrorFill';
import { TranscribeTextVoiceErrorFill as Icon36 } from '../Icon.assets.36/TranscribeTextVoiceErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTranscribeTextVoiceErrorFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
