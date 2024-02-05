import React from 'react';

import { ChatTranscriptionOutline as Icon16 } from '../Icon.assets.16/ChatTranscriptionOutline';
import { ChatTranscriptionOutline as Icon24 } from '../Icon.assets.24/ChatTranscriptionOutline';
import { ChatTranscriptionOutline as Icon36 } from '../Icon.assets.36/ChatTranscriptionOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconChatTranscriptionOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
