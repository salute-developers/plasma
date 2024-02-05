import React from 'react';

import { TranscribeTextVoiceFill as Icon16 } from '../Icon.assets.16/TranscribeTextVoiceFill';
import { TranscribeTextVoiceFill as Icon24 } from '../Icon.assets.24/TranscribeTextVoiceFill';
import { TranscribeTextVoiceFill as Icon36 } from '../Icon.assets.36/TranscribeTextVoiceFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTranscribeTextVoiceFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
