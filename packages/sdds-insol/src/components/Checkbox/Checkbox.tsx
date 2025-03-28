import {
    checkboxConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';
import { ComponentProps } from 'react';

import { config } from './Checkbox.config';
import { config as outlineConfig } from './Checkbox.outline.config';

const mergedConfigDefault = mergeConfig(checkboxConfig, config);
export const CheckboxDefalut = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(checkboxConfig, outlineConfig);
export const CheckboxOutline = component(mergedConfigOutline);

// export type CheckboxProps = ComponentProps<typeof CheckboxComponent>;

export type CheckboxProps =
    | (ComponentProps<typeof CheckboxOutline> & {
          appereanc: 'outline';
      })
    | (ComponentProps<typeof CheckboxDefalut> & {
          appereanc?: 'default' | undefined;
      });

/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export const Checkbox = createConditionalComponent<CheckboxProps>(CheckboxDefalut, [
    {
        conditions: { prop: 'appereanc', value: 'outline' },
        component: CheckboxOutline,
    },
]);
