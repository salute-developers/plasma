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
export const RadioboxDefault = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(radioboxConfig, outlineConfig);
export const RadioboxOutline = component(mergedConfigOutline);

export type RadioboxProps =
    | (ComponentProps<typeof RadioboxDefault> & {
          appearance: 'outline';
      })
    | (ComponentProps<typeof RadioboxOutline> & {
          appearance?: 'default';
      });

export const Radiobox = createConditionalComponent<RadioboxProps>(RadioboxDefault, [
    {
        conditions: { prop: 'appearance', value: 'outline' },
        component: RadioboxOutline,
    },
]);

export { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
