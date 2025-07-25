import {
    comboboxNewConfig,
    component,
    mergeConfig,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';
import type { ComboboxItemOption, ComboboxProps, DistributiveOmit, DistributivePick } from '@salutejs/plasma-new-hope';
import React, { ComponentProps } from 'react';

import { mapSizesToOffset } from '../Autocomplete/Autocomplete';

import { config } from './Combobox.config';

const mergedConfig = mergeConfig(comboboxNewConfig, config);
const ComboboxNew = component(mergedConfig);

type PropsFromConfig = keyof typeof config['variations'];

export type Props<T extends ComboboxItemOption> = DistributiveOmit<
    ComboboxProps<T>,
    PropsFromConfig | 'hintTargetPlacement'
> &
    DistributivePick<ComponentProps<typeof ComboboxNew>, PropsFromConfig>;

const ComboboxComponent = <T extends ComboboxItemOption>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    // TODO: #2087
    return <ComboboxNew ref={ref} {...(props as any)} _offset={[0, mapSizesToOffset(props.size)]} />;
};

const Combobox = fixedForwardRef(ComboboxComponent);

export { Combobox };
