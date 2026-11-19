import {
    comboboxConfig,
    component,
    createConditionalComponent,
    mergeConfig,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';
import type { ComboboxItemOption, ComboboxProps, DistributiveOmit, DistributivePick } from '@salutejs/plasma-new-hope';
import React, { ComponentProps } from 'react';

import { config } from './Combobox.config';
import { config as whiteConfig } from './Combobox.white.config';

const mergedConfig = mergeConfig(comboboxConfig, config);
const ComboboxDefault = component(mergedConfig);

const mergedConfigWhite = mergeConfig(comboboxConfig, whiteConfig);
const ComboboxWhite = component(mergedConfigWhite);

const ComboboxComponent = createConditionalComponent({
    default: ComboboxDefault,
    white: ComboboxWhite,
});

type PropsFromConfig = keyof typeof config['variations'];

export type Props<T extends ComboboxItemOption> = DistributiveOmit<ComboboxProps<T>, PropsFromConfig | 'appearance'> &
    DistributivePick<ComponentProps<typeof ComboboxDefault>, PropsFromConfig> & {
        appearance?: 'default' | 'white';
    };

const ComboboxWithoutRef = <T extends ComboboxItemOption>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <ComboboxComponent {...(props as any)} ref={ref} />;
};

const Combobox = fixedForwardRef(ComboboxWithoutRef);

export { Combobox };
