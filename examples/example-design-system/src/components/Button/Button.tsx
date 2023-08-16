import { buttonConfig } from '@salutejs/plasma-new-hope/styled-components';
import { component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

// import { buttonConfig } from '@salutejs/plasma-new-hope';
// import { component, mergeConfig } from '@salutejs/plasma-new-hope';

import { config } from './Button.config';

const _config = mergeConfig(buttonConfig, config);

export const Button = component(_config);
