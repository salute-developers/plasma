import { createConditionalComponent } from 'src/utils';

import { badgeConfig } from '../../../components/Badge';
import { component, mergeConfig } from '../../../engines';

import { config } from './Badge.config';
import { config as clearConfig } from './Badge.clear.config';
import { config as transparentConfig } from './Badge.transparent.config';

const mergedConfig = mergeConfig(badgeConfig, config);
export const BadgeDefault = component(mergedConfig);

const mergedConfigClear = mergeConfig(badgeConfig, clearConfig);
export const BadgeClear = component(mergedConfigClear);

const mergedConfigTransparent = mergeConfig(badgeConfig, transparentConfig);
export const BadgeTransparent = component(mergedConfigTransparent);

export const Badge = createConditionalComponent({
    default: BadgeDefault,
    clear: BadgeClear,
    transparent: BadgeTransparent,
});
