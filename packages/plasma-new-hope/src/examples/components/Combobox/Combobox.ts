import type { ForwardedRef, ComponentProps, ReactElement } from 'react';

import { component, mergeConfig } from '../../../engines';
import { comboboxNewConfig } from '../../..';
import type { ComboboxProps, ComboboxItemOption } from '../../../components/Combobox';

import { config } from './Combobox.config';

const mergedConfig = mergeConfig(comboboxNewConfig, config);
const ComboboxComponent = component(mergedConfig);

type PropsFromConfig = keyof typeof config['variations'];

type PropsNew<T extends ComboboxItemOption> = Omit<ComboboxProps<T>, PropsFromConfig> &
    Pick<ComponentProps<typeof ComboboxComponent>, PropsFromConfig>;

const Combobox = ComboboxComponent as <T extends ComboboxItemOption>(
    props: PropsNew<T> & { ref?: ForwardedRef<HTMLInputElement> },
) => ReactElement | null;

export { Combobox };
