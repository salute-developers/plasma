import { selectConfig, component, mergeConfig, fixedForwardRef } from '@salutejs/plasma-new-hope/styled-components';
import type {
    SelectProps as SelectPropsNewHope,
    ItemOptionSelect,
    DistributivePick,
    DistributiveOmit,
} from '@salutejs/plasma-new-hope';
import React, { ComponentProps, ForwardedRef } from 'react';

import { mapSizesToOffset } from '../Autocomplete/Autocomplete';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
const SelectNewHope = component(mergedConfig);

export type SelectProps<K extends ItemOptionSelect> = DistributiveOmit<
    SelectPropsNewHope<K>,
    'size' | 'view' | 'chipView' | 'disabled' | 'hintTargetPlacement'
> &
    DistributivePick<ComponentProps<typeof SelectNewHope>, 'size' | 'view' | 'chipView' | 'disabled'>;

const SelectComponent = <K extends ItemOptionSelect>(props: SelectProps<K>, ref: ForwardedRef<HTMLButtonElement>) => {
    // TODO: #2087
    return <SelectNewHope ref={ref} {...(props as any)} _offset={[0, mapSizesToOffset(props.size)]} />;
};

const Select = fixedForwardRef(SelectComponent);

export { Select };
