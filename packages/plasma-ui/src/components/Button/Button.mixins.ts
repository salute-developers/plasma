import { getButtonSizesMixin, buttonSizes, buttonTypography, buttonViews } from '@salutejs/plasma-core';
import type { ButtonViewProps } from '@salutejs/plasma-core';

/**
 * @private
 */
export const applySizes = getButtonSizesMixin(buttonSizes, buttonTypography);

/**
 * @private
 */
export const applyViews = ({ view }: ButtonViewProps) => buttonViews[view];
