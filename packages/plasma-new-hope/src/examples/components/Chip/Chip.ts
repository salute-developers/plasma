import { createConditionalComponent } from 'src/utils/createConditionalComponent';
import { ComponentProps } from 'react';

import { chipConfig } from '../../../components/Chip';
import { component, mergeConfig } from '../../../engines';

import { config } from './Chip.config';
import { config as clearConfig } from './Chip.transparent.config';

const mergedConfigDefault = mergeConfig(chipConfig, config);
export const ChipDefault = component(mergedConfigDefault);

const mergedConfigTransparent = mergeConfig(chipConfig, clearConfig);
export const ChipTransparent = component(mergedConfigTransparent);

export type ChipProps = ComponentProps<typeof ChipDefault>;

export const Chip = createConditionalComponent<ChipProps, HTMLButtonElement>(ChipDefault, [
    {
        conditions: { prop: 'appearance', value: 'transparent' },
        component: ChipTransparent,
    },
]);
