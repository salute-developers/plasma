import { cardConfig, CardInnerContent, CardContent } from '../../../../components/Card';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Card.config';

const mergedConfig = mergeConfig(cardConfig, config);

export const Card = component(mergedConfig);

export { CardInnerContent, CardContent };
