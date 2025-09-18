import React, { ComponentProps } from 'react';
import {
    autocompleteConfig,
    component,
    mergeConfig,
    DistributiveOmit,
    fixedForwardRef,
    AutocompleteProps,
    DistributivePick,
    SuggestionItemType,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Autocomplete.config';

// TODO: #2087
export const mapSizesToOffset = (size?: string): number => {
    switch (size) {
        case 'xs':
            return 2;
        case 's':
        case 'm':
            return 4;
        case 'l':
        case 'xl':
            return 6;
        default:
            return 4;
    }
};

const mergedConfig = mergeConfig(autocompleteConfig, config);
export const AutocompleteComponent = component(mergedConfig);

type PropsFromConfig = keyof typeof config['variations'];

type Props<T extends SuggestionItemType> = DistributiveOmit<AutocompleteProps<T>, PropsFromConfig> &
    DistributivePick<ComponentProps<typeof AutocompleteComponent>, PropsFromConfig | 'hintTargetPlacement'>;

const AutocompleteWithoutRef = <T extends SuggestionItemType>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <AutocompleteComponent {...(props as any)} ref={ref} _offset={[0, mapSizesToOffset(props.size)]} />;
};

export const Autocomplete = fixedForwardRef(AutocompleteWithoutRef);
