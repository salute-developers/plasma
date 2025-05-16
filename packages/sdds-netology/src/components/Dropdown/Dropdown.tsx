import { dropdownConfig, component, mergeConfig, fixedForwardRef } from '@salutejs/plasma-new-hope/styled-components';
import type { DropdownItemOption, DropdownNewProps } from '@salutejs/plasma-new-hope';
import React, { ComponentProps, ForwardedRef } from 'react';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
const DropdownNewHope = component(mergedConfig);

export type DropdownProps<T extends DropdownItemOption> = Omit<DropdownNewProps<T>, 'size' | 'view'> &
    Pick<ComponentProps<typeof DropdownNewHope>, 'size' | 'view'>;

const DropdownComponent = <T extends DropdownItemOption>(
    props: DropdownProps<T>,
    ref: ForwardedRef<HTMLButtonElement>,
) => {
    return <DropdownNewHope ref={ref} {...(props as any)} />;
};

const Dropdown = fixedForwardRef(DropdownComponent);

export { Dropdown };
