import {
    comboboxConfig,
    component,
    mergeConfig,
    fixedForwardRef,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';
import type { ComboboxItemOption, ComboboxProps, DistributiveOmit, DistributivePick } from '@salutejs/plasma-new-hope';
import React, { ComponentProps } from 'react';

import { config } from './Combobox.config';
import { config as viewModeConfig } from './Combobox.viewMode.config';

const mergedConfig = mergeConfig(comboboxConfig, config);
const ComboboxDefault = component(mergedConfig);

const mergedConfigViewMode = mergeConfig(comboboxConfig, viewModeConfig);
const ComboboxViewMode = component(mergedConfigViewMode);

const ComboboxNew = createConditionalComponent({
    default: ComboboxDefault,
    viewMode: ComboboxViewMode,
});

type PropsFromConfig = keyof typeof config['variations'];

export type Props<T extends ComboboxItemOption> = DistributiveOmit<ComboboxProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof ComboboxDefault>, PropsFromConfig> & {
        appearance?: 'default' | 'viewMode';
    };

const ComboboxComponent = <T extends ComboboxItemOption>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <ComboboxNew ref={ref} {...(props as any)} />;
};

const Combobox = fixedForwardRef(ComboboxComponent);

export { Combobox };
