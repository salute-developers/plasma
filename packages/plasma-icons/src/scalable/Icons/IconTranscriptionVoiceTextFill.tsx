import React from 'react';

import { TranscriptionVoiceTextFill as Icon16 } from '../Icon.assets.16/TranscriptionVoiceTextFill';
import { TranscriptionVoiceTextFill as Icon24 } from '../Icon.assets.24/TranscriptionVoiceTextFill';
import { TranscriptionVoiceTextFill as Icon36 } from '../Icon.assets.36/TranscriptionVoiceTextFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTranscriptionVoiceTextFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
