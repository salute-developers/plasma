import { markdownConfig } from '../../../../components/_ai/Markdown';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Markdown.config';

const mergedConfig = mergeConfig(markdownConfig, config);

export const Markdown = component(mergedConfig);
