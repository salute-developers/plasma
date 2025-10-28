import { addScrollbar as mixin } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Scrollbar.config';

export const addScrollbar = (size: 'm' | 's') => {
    return mixin({ ...config.size[size], ...config.view.default });
};
