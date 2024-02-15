import React from 'react';

import { FeedbackCircleFill as Icon16 } from '../Icon.assets.16/FeedbackCircleFill';
import { FeedbackCircleFill as Icon24 } from '../Icon.assets.24/FeedbackCircleFill';
import { FeedbackCircleFill as Icon36 } from '../Icon.assets.36/FeedbackCircleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFeedbackCircleFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
