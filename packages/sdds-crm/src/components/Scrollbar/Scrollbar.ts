import { addScrollbar } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Scrollbar.config';

export const scrollBar = (size: 'm' | 's') => {
    return addScrollbar(config.size[size]);
};
