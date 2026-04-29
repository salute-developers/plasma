import { radioboxConfig } from '../../../components/Radiobox';
import { component, mergeConfig } from '../../../engines';
import { createConditionalComponent } from '../../../utils';

import { config } from './Radiobox.config';
import { config as outlineConfig } from './Radiobox.outline.config';

const mergedConfigDefault = mergeConfig(radioboxConfig, config);
export const RadioboxDefault = component(mergedConfigDefault);

const mergedConfigOutline = mergeConfig(radioboxConfig, outlineConfig);
export const RadioboxOutline = component(mergedConfigOutline);

export const Radiobox = createConditionalComponent({
    default: RadioboxDefault,
    outline: RadioboxOutline,
});
