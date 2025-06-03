import { component, mergeConfig } from '../../../engines';
import { toolbarConfig, toolbarDividerConfig } from '../../../components/Toolbar';

import { config } from './Toolbar.config';

const mergedConfig = mergeConfig(toolbarConfig, config);

/**
 * Компонент Toolbar.
 */
export const Toolbar = component(mergedConfig);

const mergedDividerConfig = mergeConfig(toolbarDividerConfig);
export const ToolbarDivider = component(mergedDividerConfig);
