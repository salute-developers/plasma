import { popoverConfig } from '../../../../components/Popover';
import { component, mergeConfig } from '../../../../engines';

export type { PopoverPlacement, PopoverTrigger } from '../../../../components/Popover';

const mergedConfig = mergeConfig(popoverConfig);

export const Popover = component(mergedConfig);
