import {
    comboboxNewConfig,
    component,
    mergeConfig,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';
import type { ItemOption, ComboboxProps, DistributiveOmit, DistributivePick } from '@salutejs/plasma-new-hope';
import React, { ComponentProps } from 'react';

import { config } from './Combobox.config';

const mergedConfig = mergeConfig(comboboxNewConfig, config);
const ComboboxNew = component(mergedConfig);

type PropsFromConfig = keyof typeof config['variations'];

export type Props<T extends ItemOption> = DistributiveOmit<ComboboxProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof ComboboxNew>, PropsFromConfig>;

const ComboboxComponent = <T extends ItemOption>(props: Props<T>, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <ComboboxNew ref={ref} {...(props as any)} />;
};

const Combobox = fixedForwardRef(ComboboxComponent);

export { Combobox };
