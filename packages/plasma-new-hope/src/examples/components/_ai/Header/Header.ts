import { headerConfig } from '../../../../components/_ai/Header';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Header.config';

const mergedConfig = mergeConfig(headerConfig, config);

export const Header = component(mergedConfig);
