import {
    autocompleteConfig,
    AutocompleteProps,
    component,
    DistributiveOmit,
    DistributivePick,
    mergeConfig,
    SuggestionItemType,
    fixedForwardRef,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';
import React, { ComponentProps } from 'react';

import { config } from './Autocomplete.config';
import { config as viewModeConfig } from './Autocomplete.viewMode.config';

const mergedConfig = mergeConfig(autocompleteConfig, config);
export const AutocompleteDefault = component(mergedConfig);

const mergedConfigViewMode = mergeConfig(autocompleteConfig, viewModeConfig);
export const AutocompleteViewMode = component(mergedConfigViewMode);

export const AutocompleteComponent = createConditionalComponent({
    default: AutocompleteDefault,
    viewMode: AutocompleteViewMode,
});

type PropsFromConfig = keyof typeof config['variations'];

type Props<T extends SuggestionItemType> = DistributiveOmit<AutocompleteProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof AutocompleteDefault>, PropsFromConfig> & {
        appearance?: 'default' | 'viewMode';
    };

const AutocompleteWithoutRef = <T extends SuggestionItemType>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <AutocompleteComponent {...(props as any)} ref={ref} />;
};

export const Autocomplete = fixedForwardRef(AutocompleteWithoutRef);
