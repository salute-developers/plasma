import { selectConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import type { SelectProps as SelectPropsNewHope } from '@salutejs/plasma-new-hope/styled-components';
import React, { forwardRef, ComponentProps } from 'react';

import { config } from './Select.config';

const mergedConfig = mergeConfig(selectConfig, config);
const SelectNewHope = component(mergedConfig);

type SelectProps = Omit<SelectPropsNewHope, 'size' | 'view' | 'chipView'> &
    Pick<ComponentProps<typeof SelectNewHope>, 'size' | 'view' | 'chipView'>;

const Select = forwardRef<HTMLButtonElement, SelectProps>((props, ref) => (
    <SelectNewHope ref={ref} {...(props as any)} />
));

export { Select };
