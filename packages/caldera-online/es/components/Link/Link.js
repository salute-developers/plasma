import { linkConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { config } from './Link.config';
var mergedConfig = /*#__PURE__*/mergeConfig(linkConfig, config);
var LinkComponent = /*#__PURE__*/component(mergedConfig);
/**
 * Ссылка.
 */
export var Link = LinkComponent;