import { answerConfig } from '../../../../components/_ai/Answer';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Answer.config';

const mergedConfig = mergeConfig(answerConfig, config);

export const Answer = component(mergedConfig);
