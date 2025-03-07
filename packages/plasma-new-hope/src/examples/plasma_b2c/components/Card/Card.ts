import { cardConfig } from '../../../../components/Card';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Card.config';

const mergedConfig = mergeConfig(cardConfig, config);

export const Card = component(mergedConfig);
