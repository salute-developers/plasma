import React from 'react';

import { MessageTranscriptionOutline as Icon16 } from '../Icon.assets.16/MessageTranscriptionOutline';
import { MessageTranscriptionOutline as Icon24 } from '../Icon.assets.24/MessageTranscriptionOutline';
import { MessageTranscriptionOutline as Icon36 } from '../Icon.assets.36/MessageTranscriptionOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageTranscriptionOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
