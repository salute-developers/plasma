import { noteConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Note.config';

const mergedConfig = mergeConfig(noteConfig, config);

export const Note = component(mergedConfig);
