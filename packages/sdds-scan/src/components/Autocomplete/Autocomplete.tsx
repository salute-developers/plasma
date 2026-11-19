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
import { config as whiteConfig } from './Autocomplete.white.config';

const mergedConfig = mergeConfig(autocompleteConfig, config);
export const AutocompleteDefault = component(mergedConfig);

const mergedConfigWhite = mergeConfig(autocompleteConfig, whiteConfig);
export const AutocompleteWhite = component(mergedConfigWhite);

export const AutocompleteComponent = createConditionalComponent({
    default: AutocompleteDefault,
    white: AutocompleteWhite,
});

type PropsFromConfig = keyof typeof config['variations'];

type Props<T extends SuggestionItemType> = DistributiveOmit<AutocompleteProps<T>, PropsFromConfig | 'appearance'> &
    DistributivePick<ComponentProps<typeof AutocompleteDefault>, PropsFromConfig> & {
        appearance?: 'default' | 'white';
    };

const AutocompleteWithoutRef = <T extends SuggestionItemType>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <AutocompleteComponent {...(props as any)} ref={ref} />;
};

export const Autocomplete = fixedForwardRef(AutocompleteWithoutRef);
