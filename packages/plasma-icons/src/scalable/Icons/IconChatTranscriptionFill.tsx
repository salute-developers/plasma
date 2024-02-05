import React from 'react';

import { ChatTranscriptionFill as Icon16 } from '../Icon.assets.16/ChatTranscriptionFill';
import { ChatTranscriptionFill as Icon24 } from '../Icon.assets.24/ChatTranscriptionFill';
import { ChatTranscriptionFill as Icon36 } from '../Icon.assets.36/ChatTranscriptionFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChatTranscriptionFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
