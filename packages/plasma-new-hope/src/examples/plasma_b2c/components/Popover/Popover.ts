import { popoverConfig } from '../../../../components/Popover';
import { component, mergeConfig } from '../../../../engines';

export type { PopoverProps, PopoverPlacement, PopoverTrigger } from '../../../..';

const mergedConfig = mergeConfig(popoverConfig);

export const Popover = component(mergedConfig);
