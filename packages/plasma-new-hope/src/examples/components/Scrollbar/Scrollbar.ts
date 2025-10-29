import { addScrollbar } from 'src/mixins';

import { config } from './Scrollbar.config';

export const scrollBar = (size: 'm' | 's') => {
    return addScrollbar(config.size[size]);
};
