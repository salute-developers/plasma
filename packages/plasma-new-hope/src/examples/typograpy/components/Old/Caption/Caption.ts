import { captionConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Caption.config';

const mergedConfig = mergeConfig(captionConfig, config);

export const Caption = component(mergedConfig);
