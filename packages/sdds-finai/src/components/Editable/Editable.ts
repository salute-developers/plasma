import { editableConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import * as typographyComponents from '../Typography';

import { config } from './Editable.config';

export const typographyVariants = typographyComponents;

const finalConfig = editableConfig(typographyVariants);
const mergedConfig = mergeConfig(finalConfig, config);

export const Editable = component(mergedConfig);
