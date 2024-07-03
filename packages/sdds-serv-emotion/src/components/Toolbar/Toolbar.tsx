import { toolbarConfig, component, mergeConfig, toolbarDividerConfig } from '@salutejs/plasma-new-hope/emotion';

import { config } from './Toolbar.config';

const mergedConfig = mergeConfig(toolbarConfig, config);

/**
 * Компонент Toolbar.
 */
export const Toolbar = component(mergedConfig);

const mergedDividerConfig = mergeConfig(toolbarDividerConfig);
export const ToolbarDivider = component(mergedDividerConfig);
