import React from 'react';

import { NotebookWavesFill as Icon16 } from '../Icon.assets.16/NotebookWavesFill';
import { NotebookWavesFill as Icon24 } from '../Icon.assets.24/NotebookWavesFill';
import { NotebookWavesFill as Icon36 } from '../Icon.assets.36/NotebookWavesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNotebookWavesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
