import { accordionConfig, AccordionItem } from '../../../components/Accordion';
import { component, mergeConfig } from '../../../engines';

import { config } from './Accordion.config';

const mergedConfig = mergeConfig(accordionConfig, config);

export const Accordion = component(mergedConfig);
export { AccordionItem };
