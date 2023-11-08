import { popoverConfig } from '../../../../components/Popover';
import { component, mergeConfig } from '../../../../engines';

export type {
    PopoverProps,
    PopoverPlacement_1 as PopoverPlacement,
    PopoverTrigger_1 as PopoverTrigger,
} from '../../../..';

const mergedConfig = mergeConfig(popoverConfig);

export const Popover = component(mergedConfig);
