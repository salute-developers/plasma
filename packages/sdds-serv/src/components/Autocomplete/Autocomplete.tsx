import {
    autocompleteConfig,
    AutocompleteProps,
    component,
    createConditionalComponent,
    DistributiveOmit,
    DistributivePick,
    mergeConfig,
    SuggestionItemType,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';
import React, { ComponentProps } from 'react';

import { config } from './Autocomplete.config';
import { config as clearConfig } from './Autocomplete.clear.config';

const mergedConfig = mergeConfig(autocompleteConfig, config);
export const AutocompleteDefault = component(mergedConfig);

const mergedClearConfig = mergeConfig(autocompleteConfig, clearConfig);
export const AutocompleteClear = component(mergedClearConfig);

export const AutocompleteComponent = createConditionalComponent({
    default: AutocompleteDefault,
    clear: AutocompleteClear,
});

type PropsFromConfig = keyof typeof config['variations'];

type Props<T extends SuggestionItemType> = DistributiveOmit<AutocompleteProps<T>, PropsFromConfig | 'appearance'> &
    DistributivePick<ComponentProps<typeof AutocompleteDefault>, PropsFromConfig> & {
        appearance?: 'default' | 'clear';
    };

const AutocompleteWithoutRef = <T extends SuggestionItemType>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <AutocompleteComponent {...(props as any)} ref={ref} />;
};

export const Autocomplete = fixedForwardRef(AutocompleteWithoutRef);
