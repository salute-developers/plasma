import {
    codeAreaConfig,
    component,
    createConditionalComponent,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './CodeArea.config';
import { config as hasWrapperConfig } from './CodeArea.hasWrapper.config';

const mergedConfig = mergeConfig(codeAreaConfig, config);
export const CodeAreaDefault = component(mergedConfig);

const mergedConfigHasWrapper = mergeConfig(codeAreaConfig, hasWrapperConfig);
export const CodeAreaHasWrapper = component(mergedConfigHasWrapper);

export const CodeArea = createConditionalComponent({
    default: CodeAreaDefault,
    hasWrapper: CodeAreaHasWrapper,
});
