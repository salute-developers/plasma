import React from 'react';

import { ItemOptionTransformed } from '../../../../Combobox.types';
import type { PathState } from '../../../../reducers';

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
