import {
    comboboxNewConfig,
    component,
    mergeConfig,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';
import type { ComponentProps } from 'react';
import type { ComboboxItemOption, ComboboxProps, DistributiveOmit, DistributivePick } from '@salutejs/plasma-new-hope';
import React from 'react';

import { config } from './Combobox.config';
import { Combobox as ComboboxOld } from './Legacy';

const mergedConfig = mergeConfig(comboboxNewConfig, config);
const ComboboxNew = component(mergedConfig);

type PropsFromConfig = keyof typeof config['variations'];

type PropsOld = ComponentProps<typeof ComboboxOld> & { items?: never };

type PropsNew<T extends ComboboxItemOption> = DistributiveOmit<ComboboxProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof ComboboxNew>, PropsFromConfig>;

type CommonProps<T extends ComboboxItemOption> = PropsOld | PropsNew<T>;

const ComboboxComponent = <T extends ComboboxItemOption>(
    props: CommonProps<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    if (props.items) {
        return <ComboboxNew ref={ref} {...(props as any)} />;
    }

    return <ComboboxOld ref={ref} {...props} />;
};

const Combobox = fixedForwardRef(ComboboxComponent);

export { Combobox };
