import React from 'react';

import { MessageQuestionFill as Icon16 } from '../Icon.assets.16/MessageQuestionFill';
import { MessageQuestionFill as Icon24 } from '../Icon.assets.24/MessageQuestionFill';
import { MessageQuestionFill as Icon36 } from '../Icon.assets.36/MessageQuestionFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageQuestionFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
