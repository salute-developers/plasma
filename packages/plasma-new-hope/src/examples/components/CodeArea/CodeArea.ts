import { createConditionalComponent } from 'src/utils';

import { codeAreaConfig } from '../../../components/CodeArea';
import { component, mergeConfig } from '../../../engines';

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
