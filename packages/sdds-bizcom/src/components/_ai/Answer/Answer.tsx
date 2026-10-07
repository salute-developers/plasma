import { answerConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Answer.config';

export const answerMergedConfig = mergeConfig(answerConfig, config);
export const Answer = component(answerMergedConfig);
