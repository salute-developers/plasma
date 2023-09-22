import { checkboxConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Checkbox.config';

const mergedConfig = mergeConfig(checkboxConfig, config);
const CheckboxComponent = component(mergedConfig);

export type CheckboxProps = typeof CheckboxComponent;

/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export const Checkbox = CheckboxComponent;
