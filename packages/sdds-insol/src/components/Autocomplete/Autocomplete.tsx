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

const mergedConfig = mergeConfig(autocompleteConfig, config);
const AutocompleteComponent = component(mergedConfig);

type AutocompleteProps = DistributiveOmit<ComponentProps<typeof AutocompleteComponent>, 'hintTargetPlacement'>;

const AutocompleteWithTypes = (props: AutocompleteProps, ref: ForwardedRef<HTMLInputElement>) => (
    <AutocompleteComponent ref={ref} {...(props as any)} />
);

export const Autocomplete = fixedForwardRef(AutocompleteWithTypes);
