import { popoverConfig } from '../../../../components/Popover';
import { component, mergeConfig } from '../../../../engines';

export type { PopoverProps, PopoverPlacement, PopoverTrigger } from '../../../../components/Popover';

const mergedConfig = mergeConfig(popoverConfig);

export const Popover = component(mergedConfig);
