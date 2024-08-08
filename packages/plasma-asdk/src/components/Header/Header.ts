import { mergeConfig } from '@salutejs/plasma-new-hope';
import { component } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Header.config';
import { headerRootConfig } from './HeaderRoot/HeaderRoot';
import { headerArrowConfig, headerLogoConfig, headerTitleWrapperConfig } from './ui';

export { HeaderContent } from './HeaderContent/HeaderContent';
export { HeaderTitle } from './ui';

const mergedConfig = mergeConfig(headerRootConfig, config);
const mergedLogoConfig = mergeConfig(headerLogoConfig);
const mergedArrowConfig = mergeConfig(headerArrowConfig);
const mergedTitleWrapperConfig = mergeConfig(headerTitleWrapperConfig);

export const HeaderRoot = component(mergedConfig);
export const HeaderLogo = component(mergedLogoConfig);
export const HeaderArrow = component(mergedArrowConfig);
export const HeaderTitleWrapper = component(mergedTitleWrapperConfig);
