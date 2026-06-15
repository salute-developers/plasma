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

import { config } from './Select.config';
import { config as viewModeConfig } from './Select.viewMode.config';

const mergedConfig = mergeConfig(selectConfig, config);
const SelectDefault = component(mergedConfig);

const mergedConfigViewMode = mergeConfig(selectConfig, viewModeConfig);
const SelectViewMode = component(mergedConfigViewMode);

const SelectNewHope = createConditionalComponent({
    default: SelectDefault,
    viewMode: SelectViewMode,
});

export type SelectProps<K extends SelectItemOption> = DistributiveOmit<
    SelectPropsNewHope<K>,
    'size' | 'view' | 'chipView' | 'hintView' | 'hintSize' | 'labelPlacement'
> &
    DistributivePick<
        ComponentProps<typeof SelectDefault>,
        'size' | 'view' | 'chipView' | 'hintView' | 'hintSize' | 'labelPlacement'
    > & {
        appearance?: 'default' | 'viewMode';
    };

const SelectComponent = <K extends SelectItemOption>(props: SelectProps<K>, ref: ForwardedRef<HTMLButtonElement>) => {
    return <SelectNewHope ref={ref} {...(props as any)} />;
};

const Select = fixedForwardRef(SelectComponent);

export { Select };
