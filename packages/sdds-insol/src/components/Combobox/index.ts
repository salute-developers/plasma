import type { ItemOption, ComboboxProps } from '@salutejs/plasma-new-hope';
import type { ForwardedRef, ReactElement, ComponentProps } from 'react';

import { Combobox as ComboboxComponent } from './Combobox';
import { config } from './Combobox.config';

type PropsFromConfig = keyof typeof config['variations'];

type PropsNew<T extends ItemOption> = Omit<ComboboxProps<T>, PropsFromConfig> &
    Pick<ComponentProps<typeof ComboboxComponent>, PropsFromConfig>;

const Combobox = ComboboxComponent as <T extends ItemOption>(
    props: PropsNew<T> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReactElement | null;

export { Combobox };
