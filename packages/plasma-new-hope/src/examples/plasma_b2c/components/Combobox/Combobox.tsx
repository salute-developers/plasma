import * as React from 'react';
import type { ComponentProps } from 'react';

import { fixedForwardRef } from '../../../../utils';
import { DistributivePick, DistributiveOmit } from '../../../../types';
import { component, mergeConfig } from '../../../../engines';
import { comboboxNewConfig } from '../../../..';
import type { ComboboxProps, ComboboxItemOption } from '../../../../components/Combobox';

import { config } from './Combobox.config';

const mergedConfig = mergeConfig(comboboxNewConfig, config);
const ComboboxNew = component(mergedConfig);

type PropsFromConfig = keyof typeof config['variations'];

type Props<T extends ComboboxItemOption> = DistributiveOmit<ComboboxProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof ComboboxNew>, PropsFromConfig>;

const ComboboxComponent = <T extends ComboboxItemOption>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <ComboboxNew ref={ref} {...(props as any)} />;
};

const Combobox = fixedForwardRef(ComboboxComponent);

export { Combobox };
