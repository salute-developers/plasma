import {
    component,
    mergeConfig,
    headerRootConfig,
    headerLogoConfig,
    headerArrowConfig,
    headerTitleWrapperConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Header.config';

const mergedConfig = mergeConfig(headerRootConfig, config);
const mergedLogoConfig = mergeConfig(headerLogoConfig);
const mergedArrowConfig = mergeConfig(headerArrowConfig);
const mergedTitleWrapperConfig = mergeConfig(headerTitleWrapperConfig);

export const HeaderRoot = component(mergedConfig);
export const HeaderLogo = component(mergedLogoConfig);
export const HeaderArrow = component(mergedArrowConfig);
export const HeaderTitleWrapper = component(mergedTitleWrapperConfig);
