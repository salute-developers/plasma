import {
    radioboxConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';
import { ComponentProps } from 'react';

import { config } from './Radiobox.config';
import { config as outlineConfig } from './Radiobox.outline.config';

const mergedConfigDefault = mergeConfig(radioboxConfig, config);
export const RadioboxDefalut = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(radioboxConfig, outlineConfig);
export const RadioboxOutline = component(mergedConfigOutline);

type CheckboxProps =
    | (ComponentProps<typeof RadioboxDefalut> & {
          appereanc: 'outline';
      })
    | (ComponentProps<typeof RadioboxOutline> & {
          appereanc?: 'default' | undefined;
      });

export const Radiobox = createConditionalComponent<CheckboxProps>(RadioboxDefalut, [
    {
        conditions: { prop: 'appereanc', value: 'outline' },
        component: RadioboxOutline,
    },
]);

export { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
