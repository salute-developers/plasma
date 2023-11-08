import { popoverConfig } from '../../../../components/Popover';
import { component, mergeConfig } from '../../../../engines';

export type { PopoverPlacement_1 as PopoverPlacement, PopoverTrigger_1 as PopoverTrigger } from '../../../..';

const mergedConfig = mergeConfig(popoverConfig);
const PopoverComponent = component(mergedConfig);

/**
 * Всплывающее окно.
 */
export const Popover = PopoverComponent;
