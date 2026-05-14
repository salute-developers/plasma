import { dropdownConfig, component, mergeConfig, fixedForwardRef } from '@salutejs/plasma-new-hope/emotion';
import type { DropdownItemOption, DropdownProps } from '@salutejs/plasma-new-hope';
import React, { ComponentProps, ForwardedRef } from 'react';

import { config } from './Dropdown.config';

const mergedConfig = mergeConfig(dropdownConfig, config);
const DropdownNewHope = component(mergedConfig);

type Props<T extends DropdownItemOption> = Omit<DropdownProps<T>, 'size' | 'view'> &
    Pick<ComponentProps<typeof DropdownNewHope>, 'size' | 'view'>;

const DropdownComponent = <T extends DropdownItemOption>(props: Props<T>, ref: ForwardedRef<HTMLButtonElement>) => {
    return <DropdownNewHope ref={ref} {...(props as any)} />;
};

const Dropdown = fixedForwardRef(DropdownComponent);

export { Dropdown };
export type { Props as DropdownProps };
