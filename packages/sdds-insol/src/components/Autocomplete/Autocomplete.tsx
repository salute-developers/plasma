import React from 'react';
import type { ComponentProps, ForwardedRef } from 'react';
import {
    autocompleteConfig,
    component,
    mergeConfig,
    DistributiveOmit,
    fixedForwardRef,
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
const AutocompleteComponent = component(mergedConfig);

type AutocompleteProps = DistributiveOmit<ComponentProps<typeof AutocompleteComponent>, 'hintTargetPlacement'>;

const AutocompleteWithTypes = (props: AutocompleteProps, ref: ForwardedRef<HTMLInputElement>) => (
    <AutocompleteComponent ref={ref} {...(props as any)} _offset={[0, mapSizesToOffset(props.size)]} />
);

export const Autocomplete = fixedForwardRef(AutocompleteWithTypes);
