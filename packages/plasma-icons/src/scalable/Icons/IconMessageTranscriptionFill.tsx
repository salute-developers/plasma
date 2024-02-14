import React from 'react';

import { MessageTranscriptionFill as Icon16 } from '../Icon.assets.16/MessageTranscriptionFill';
import { MessageTranscriptionFill as Icon24 } from '../Icon.assets.24/MessageTranscriptionFill';
import { MessageTranscriptionFill as Icon36 } from '../Icon.assets.36/MessageTranscriptionFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageTranscriptionFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
