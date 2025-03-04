import { selectConfig, component, mergeConfig, fixedForwardRef } from '@salutejs/plasma-new-hope/styled-components';
import React, { ComponentProps, ForwardedRef } from 'react';
import type {
    DropdownNodeSelect,
    MergedSelectProps as MergedSelectPropsNewHope,
    DistributiveOmit,
    DistributivePick,
} from '@salutejs/plasma-new-hope';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
const SelectNewHope = component(mergedConfig);

export type SelectProps<T, K extends DropdownNodeSelect> = DistributiveOmit<
    MergedSelectPropsNewHope<T, K>,
    'size' | 'view' | 'chipView' | 'disabled'
> &
    DistributivePick<ComponentProps<typeof SelectNewHope>, 'size' | 'view' | 'chipView' | 'disabled'>;

const SelectComponent = <T, K extends DropdownNodeSelect>(
    props: SelectProps<T, K>,
    ref: ForwardedRef<HTMLButtonElement>,
) => {
    return <SelectNewHope ref={ref} {...(props as any)} />;
};

const Select = fixedForwardRef(SelectComponent);

export { Select };
