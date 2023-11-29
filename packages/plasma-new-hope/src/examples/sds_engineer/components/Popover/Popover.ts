import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { PopoverProps, popoverConfig } from '../../../../components/Popover';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Popover.config';

export type { PopoverProps, PopoverPlacement, PopoverTrigger } from '../../../..';

const mergedConfig = mergeConfig(popoverConfig, config);

export const Popover = component(mergedConfig) as ForwardRefExoticComponent<
    PopoverProps & RefAttributes<HTMLDivElement>
>;
