import { dsplConfig, typographyComponent } from '../../../../../components/Typography';
import { component, mergeConfig } from '../../../../../engines';

import { config } from './Dspl.config';

const mergedConfig = mergeConfig(dsplConfig, config);

export const Dspl = typographyComponent(component(mergedConfig));
