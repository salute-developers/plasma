import type { ButtonProps as BaseProps, ButtonContentProps, ButtonViewProps } from '@salutejs/plasma-core';

import { ButtonView } from './Button.props';

/**
 * Размер кнопки
 */
export type ButtonSizes = { size: 'l' | 'm' | 's' | 'xs' | 'xxs' };

export type ButtonProps = BaseProps & Partial<ButtonSizes> & Partial<ButtonViewProps<ButtonView>> & ButtonContentProps;

export type Design = {
    design: 'b2c' | 'web';
};
