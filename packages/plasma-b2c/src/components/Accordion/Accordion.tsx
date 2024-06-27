import { accordionConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Accordion.config';

const mergedConfig = mergeConfig(accordionConfig, config);
const AccordionComponent = component(mergedConfig);

/**
 * Accordion
 */
export const Accordion = AccordionComponent;
