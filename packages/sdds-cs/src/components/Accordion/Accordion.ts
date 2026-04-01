import { component, mergeConfig, accordionConfig, AccordionItem } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Accordion.config';

const mergedConfig = mergeConfig(accordionConfig, config);

export const Accordion = component(mergedConfig);

export { AccordionItem };
