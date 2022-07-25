import React from 'react';

import { HeaderArrow, HeaderArrowProps } from './HeaderArrow';

export interface HeaderBackProps extends Omit<HeaderArrowProps, 'arrow'> {}

/**
 * Кнопка назад.
 */
export const HeaderBack = (props: HeaderBackProps) => <HeaderArrow arrow="back" {...props} />;
