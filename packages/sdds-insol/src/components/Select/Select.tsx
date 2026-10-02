import {
    selectConfig,
    component,
    mergeConfig,
    fixedForwardRef,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';
import type {
    SelectProps as SelectPropsNewHope,
    SelectItemOption,
    DistributivePick,
    DistributiveOmit,
} from '@salutejs/plasma-new-hope';
import React, { ComponentProps, ForwardedRef } from 'react';

import { mapSizesToOffset } from '../Autocomplete/Autocomplete';

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
    DistributivePick<
        ComponentProps<typeof SelectDefault>,
        'size' | 'view' | 'chipView' | 'hintView' | 'hintSize' | 'labelPlacement'
    > & {
        appearance?: 'default' | 'clear';
    };

const SelectComponent = <K extends SelectItemOption>(props: SelectProps<K>, ref: ForwardedRef<HTMLButtonElement>) => {
    // TODO: #2087
    return (
        <SelectNewHope
            ref={ref}
            {...(props as any)}
            _offset={[0, mapSizesToOffset(props.size)]}
            _checkboxAppearance="outline"
        />
    );
};

const Select = fixedForwardRef(SelectComponent);

export { Select };
