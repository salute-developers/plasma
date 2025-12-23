import { _beta_popoverConfig } from 'src/components/_beta/Popover';
import { component, mergeConfig } from 'src/engines';
import { createConditionalComponent } from 'src/utils';

import { config as closeNoneConfig } from './Popover.closeNone.config';
import { config as closeInnerConfig } from './Popover.closeInner.config';

const mergedCloseNoneConfig = mergeConfig(_beta_popoverConfig, closeNoneConfig);
export const PopoverCloseNone = component(mergedCloseNoneConfig);

const mergedCloseInnerConfig = mergeConfig(_beta_popoverConfig, closeInnerConfig);
export const PopoverCloseInner = component(mergedCloseInnerConfig);

export const Popover = createConditionalComponent(PopoverCloseNone, [
    {
        conditions: { prop: 'appearance', value: 'closeInner' },
        component: PopoverCloseInner,
    },
]);
