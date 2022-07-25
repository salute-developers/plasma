import React from 'react';

import { HeaderArrow, HeaderArrowProps } from './HeaderArrow';

export interface HeaderBackProps extends Omit<HeaderArrowProps, 'arrow'> {}

/**
 * Кнопка свернуть.
 */
export const HeaderMinimize = (props: HeaderBackProps) => <HeaderArrow arrow="minimize" {...props} />;
