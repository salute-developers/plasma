import { footnoteConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Footnote.config';

const mergedConfig = mergeConfig(footnoteConfig, config);

export const Footnote = component(mergedConfig);
