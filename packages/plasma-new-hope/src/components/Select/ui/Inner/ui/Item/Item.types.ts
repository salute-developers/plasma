import React from 'react';

import type { PathState } from '../../../../reducers';
import type { ItemOptionTransformed } from '../../../../Select.types';

export type ItemProps = {
    item: ItemOptionTransformed;
    currentLevel: number;
    index: number;
    path: PathState;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLevel?: React.AriaAttributes['aria-level'];
    ariaLabel?: React.AriaAttributes['aria-label'];
};
