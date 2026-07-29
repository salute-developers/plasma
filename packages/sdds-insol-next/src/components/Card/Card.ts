import {
    cardConfig,
    CardContent,
    CardInnerContent,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Card.config';

const mergedConfig = mergeConfig(cardConfig, config);
const CardComponent = component(mergedConfig);

/**
 * Компонент Card.
 */
export const Card = CardComponent;

export { CardContent, CardInnerContent };
