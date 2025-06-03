import { ComponentProps } from 'react';

import { radioboxConfig } from '../../../components/Radiobox';
import { component, mergeConfig } from '../../../engines';
import { createConditionalComponent } from '../../../utils';

import { config } from './Radiobox.config';
import { config as outlineConfig } from './Radiobox.outline.config';

const mergedConfigDefault = mergeConfig(radioboxConfig, config);
export const RadioboxDefault = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(radioboxConfig, outlineConfig);
export const RadioboxOutline = component(mergedConfigOutline);

type CheckboxProps =
    | (ComponentProps<typeof RadioboxDefault> & {
          appearance: 'outline';
      })
    | (ComponentProps<typeof RadioboxOutline> & {
          appearance?: 'default' | undefined;
      });

export const Radiobox = createConditionalComponent<CheckboxProps>(RadioboxDefault, [
    {
        conditions: { prop: 'appearance', value: 'outline' },
        component: RadioboxOutline,
    },
]);
