import { ComponentProps } from 'react';

import { checkboxConfig } from '../../../../components/Checkbox';
import { component, mergeConfig } from '../../../../engines';
import { createConditionalComponent } from '../../../../utils/createConditionalComponent';

import { config } from './Checkbox.config';
import { config as outlineConfig } from './Checkbox.outline.config';

const mergedConfigDefault = mergeConfig(checkboxConfig, config);
export const CheckboxDefault = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(checkboxConfig, outlineConfig);
export const CheckboxOutline = component(mergedConfigOutline);

export type CheckboxProps = ComponentProps<typeof CheckboxDefault>;

/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export const Checkbox = createConditionalComponent<CheckboxProps>(CheckboxDefault, [
    {
        conditions: { prop: 'appearance', value: 'outline' },
        component: CheckboxOutline,
    },
]);
