import { buttonTypographyConfig } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Button.config';

const mergedConfig = mergeConfig(buttonTypographyConfig, config);

export const Button = component(mergedConfig);
