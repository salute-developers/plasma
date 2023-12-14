import {
    headerRootConfig,
    headerLogoConfig,
    headerArrowConfig,
    headerTitleWrapperConfig,
} from '../../../../components/Header';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Header.config';

export { HeaderContent, HeaderTitle } from '../../../../components/Header';

const mergedConfig = mergeConfig(headerRootConfig, config);
const mergedLogoConfig = mergeConfig(headerLogoConfig);
const mergedArrowConfig = mergeConfig(headerArrowConfig);
const mergedTitleWrapperConfig = mergeConfig(headerTitleWrapperConfig);

export const HeaderRoot = component(mergedConfig);
export const HeaderLogo = component(mergedLogoConfig);
export const HeaderArrow = component(mergedArrowConfig);
export const HeaderTitleWrapper = component(mergedTitleWrapperConfig);
