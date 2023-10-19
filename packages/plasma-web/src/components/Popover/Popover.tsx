import { popoverConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const mergedConfig = mergeConfig(popoverConfig);
const PopoverComponent = component(mergedConfig);

/**
 * Всплывающее окно.
 */
export const Popover = PopoverComponent;
