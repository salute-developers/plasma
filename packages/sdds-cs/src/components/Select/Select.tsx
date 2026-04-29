import { selectConfig, component, mergeConfig, fixedForwardRef } from '@salutejs/plasma-new-hope/emotion';
import type {
    SelectProps as SelectPropsNewHope,
    SelectItemOption,
    DistributivePick,
    DistributiveOmit,
} from '@salutejs/plasma-new-hope';
import React, { ComponentProps, ForwardedRef } from 'react';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
const SelectNewHope = component(mergedConfig);

export type SelectProps<K extends SelectItemOption> = DistributiveOmit<
    SelectPropsNewHope<K>,
    'size' | 'view' | 'chipView' | 'hintView' | 'hintSize' | 'labelPlacement'
> &
    DistributivePick<ComponentProps<typeof SelectNewHope>, 'size' | 'view' | 'chipView' | 'labelPlacement'>;

const SelectComponent = <K extends SelectItemOption>(props: SelectProps<K>, ref: ForwardedRef<HTMLButtonElement>) => {
    return <SelectNewHope ref={ref} {...(props as any)} />;
};

const Select = fixedForwardRef(SelectComponent);

export { Select };
