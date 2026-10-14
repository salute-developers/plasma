import {
    selectConfig,
    component,
    mergeConfig,
    fixedForwardRef,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/emotion';
import type {
    SelectProps as SelectPropsNewHope,
    SelectItemOption,
    DistributivePick,
    DistributiveOmit,
} from '@salutejs/plasma-new-hope';
import React, { ComponentProps, ForwardedRef } from 'react';

import { config } from './Select.config';
import { config as clearConfig } from './Select.clear.config';

const mergedConfig = mergeConfig(selectConfig, config);
const SelectDefault = component(mergedConfig);

const mergedConfigClear = mergeConfig(selectConfig, clearConfig);
const SelectClear = component(mergedConfigClear);

const SelectNewHope = createConditionalComponent({
    default: SelectDefault,
    clear: SelectClear,
});

export type SelectProps<K extends SelectItemOption> = DistributiveOmit<
    SelectPropsNewHope<K>,
    'size' | 'view' | 'chipView' | 'hintView' | 'hintSize' | 'labelPlacement'
> &
    DistributivePick<ComponentProps<typeof SelectDefault>, 'size' | 'view' | 'chipView' | 'labelPlacement'> & {
        appearance?: 'default' | 'clear';
    };

const SelectComponent = <K extends SelectItemOption>(props: SelectProps<K>, ref: ForwardedRef<HTMLButtonElement>) => {
    return <SelectNewHope ref={ref} {...(props as any)} />;
};

const Select = fixedForwardRef(SelectComponent);

export { Select };
