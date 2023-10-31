import { paragraphConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Paragraph.config';

const mergedConfig = mergeConfig(paragraphConfig, config);

export const Paragraph = component(mergedConfig);
