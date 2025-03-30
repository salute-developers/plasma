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

export type RadioboxProps =
    | (ComponentProps<typeof RadioboxDefalut> & {
          appearance: 'outline';
      })
    | (ComponentProps<typeof RadioboxOutline> & {
          appearance?: 'default' | undefined;
      });

export const Radiobox = createConditionalComponent<RadioboxProps>(RadioboxDefalut, [
    {
        conditions: { prop: 'appearance', value: 'outline' },
        component: RadioboxOutline,
    },
]);

export { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
