import {
    textAreaConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './TextArea.config';

const mergedConfig = mergeConfig(textAreaConfig, config);
export const TextAreaDefault = component(mergedConfig);

export const TextArea = createConditionalComponent({
    default: TextAreaDefault,
});
