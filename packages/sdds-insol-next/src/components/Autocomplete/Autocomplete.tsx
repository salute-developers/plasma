import React, { ComponentProps } from 'react';
import {
    autocompleteConfig,
    component,
    createConditionalComponent,
    mergeConfig,
    DistributiveOmit,
    fixedForwardRef,
    AutocompleteProps,
    DistributivePick,
    SuggestionItemType,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Autocomplete.config';
import { config as clearConfig } from './Autocomplete.clear.config';

// TODO: #2087
export const mapSizesToOffset = (size?: string): number => {
    switch (size) {
        case 'xs':
            return 2;
        case 's':
        case 'm':
            return 4;
        case 'l':
            return 6;
        case 'xl':
            return 8;
        default:
            return 4;
    }
};

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
    DistributivePick<ComponentProps<typeof AutocompleteDefault>, PropsFromConfig | 'hintTargetPlacement'> & {
        appearance?: 'default' | 'clear';
    };

const AutocompleteWithoutRef = <T extends SuggestionItemType>(
    props: Props<T>,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <AutocompleteComponent {...(props as any)} ref={ref} _offset={[0, mapSizesToOffset(props.size)]} />;
};

export const Autocomplete = fixedForwardRef(AutocompleteWithoutRef);
