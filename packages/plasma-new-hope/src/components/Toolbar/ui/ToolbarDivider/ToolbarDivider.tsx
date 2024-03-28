import { dividerConfig, dividerRoot } from '../../../Divider';

import { base } from './ToolbarDivider.styles';

/**
 * Разделитель тулбара
 */
export const toolbarDividerRoot = dividerRoot;

export const toolbarDividerConfig = {
    ...dividerConfig,
    name: 'ToolbarDivider',
    layout: toolbarDividerRoot,
    base,
};
