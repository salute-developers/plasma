import { noteConfig } from '../../../components/Note';
import { component, mergeConfig } from '../../../engines';

import { config } from './Note.config';

const mergedConfig = mergeConfig(noteConfig, config);

export const Note = component(mergedConfig);
