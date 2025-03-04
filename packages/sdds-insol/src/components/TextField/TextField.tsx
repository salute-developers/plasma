import React from 'react';
import type { ComponentProps, ForwardedRef } from 'react';
import {
    textFieldConfig,
    component,
    mergeConfig,
    DistributiveOmit,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextField.config';

const mergedConfig = mergeConfig(textFieldConfig, config);
const TextFieldComponent = component(mergedConfig);

type TextFieldProps = DistributiveOmit<ComponentProps<typeof TextFieldComponent>, 'hintTargetPlacement'>;

const TexFieldWithTypes = (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => (
    <TextFieldComponent ref={ref} {...(props as any)} />
);

/**
 * Поле ввода текста.
 */
export const TextField = fixedForwardRef(TexFieldWithTypes);
