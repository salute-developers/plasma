import { ComponentProps } from 'react';

import { checkboxConfig } from '../../../../components/Checkbox';
import { component, mergeConfig } from '../../../../engines';
import { createConditionalComponent } from '../../../../utils/createConditionalComponent';

import { config } from './Checkbox.config';
import { config as outlineConfig } from './Checkbox.outline.config';

const mergedConfigDefault = mergeConfig(checkboxConfig, config);
export const CheckboxDefalut = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(checkboxConfig, outlineConfig);
export const CheckboxOutline = component(mergedConfigOutline);

type CheckboxProps =
    | (ComponentProps<typeof CheckboxOutline> & {
          appereanc: 'outline';
      })
    | (ComponentProps<typeof CheckboxDefalut> & {
          appereanc?: 'default' | undefined;
      });

export const Checkbox = createConditionalComponent<CheckboxProps>(CheckboxDefalut, [
    {
        conditions: { prop: 'appereanc', value: 'outline' },
        component: CheckboxOutline,
    },
]);
