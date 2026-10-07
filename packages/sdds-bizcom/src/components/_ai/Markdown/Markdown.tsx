import { component, markdownConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Markdown.config';

export const markdownMergedConfig = mergeConfig(markdownConfig, config);
export const Markdown = component(markdownMergedConfig);
