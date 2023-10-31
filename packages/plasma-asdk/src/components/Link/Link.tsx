import { linkConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Link.config';

const mergedConfig = mergeConfig(linkConfig, config);
const LinkComponent = component(mergedConfig);

/**
 * Ссылка.
 */
export const Link = LinkComponent;
