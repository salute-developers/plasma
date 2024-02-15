import React from 'react';

import { MessageQuestionOutline as Icon16 } from '../Icon.assets.16/MessageQuestionOutline';
import { MessageQuestionOutline as Icon24 } from '../Icon.assets.24/MessageQuestionOutline';
import { MessageQuestionOutline as Icon36 } from '../Icon.assets.36/MessageQuestionOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageQuestionOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
