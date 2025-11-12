import { addScrollbar as mixin } from 'src/mixins';

import { config } from './Scrollbar.config';

export const addScrollbar = (size: 'm' | 's') => {
    return mixin({ ...config.size[size], ...config.view.default });
};
