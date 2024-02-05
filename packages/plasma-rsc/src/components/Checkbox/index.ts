import { component, mergeConfig } from '../../engines';

import { config } from './Checkbox.config';
import { checkboxConfig } from './Checkbox';

export type { BaseboxProps } from './Checkbox';

const mergedConfig = mergeConfig(checkboxConfig, config);
const CheckboxComponent = component(mergedConfig);

export type CheckboxProps = typeof CheckboxComponent;

export const Checkbox = CheckboxComponent;
