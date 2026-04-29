import {
    autocompleteConfig,
    AutocompleteProps,
    component,
    DistributiveOmit,
    DistributivePick,
    mergeConfig,
    SuggestionItemType,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';
import React, { ComponentProps } from 'react';

import { config } from './Autocomplete.config';

const mergedConfig = mergeConfig(autocompleteConfig, config);
export const AutocompleteComponent = component(mergedConfig);

type PropsFromConfig = keyof typeof config['variations'];

type Props<T extends SuggestionItemType> = DistributiveOmit<AutocompleteProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof AutocompleteComponent>, PropsFromConfig>;

const AutocompleteWithoutRef = <T extends SuggestionItemType>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <AutocompleteComponent {...(props as any)} ref={ref} />;
};

export const Autocomplete = fixedForwardRef(AutocompleteWithoutRef);
