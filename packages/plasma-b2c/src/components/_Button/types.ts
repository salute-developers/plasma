import { plasmaCore } from '@salutejs/plasma-new-hope/styled-components';

import { ButtonView } from './Button.props';

type BaseProps = plasmaCore.ButtonProps;
type ButtonContentProps = plasmaCore.ButtonContentProps;
type ButtonViewProps<T> = plasmaCore.ButtonViewProps<T>;

/**
 * Размер кнопки
 */
export type ButtonSizes = { size: 'l' | 'm' | 's' | 'xs' | 'xxs' };

export type ButtonProps = BaseProps & Partial<ButtonSizes> & Partial<ButtonViewProps<ButtonView>> & ButtonContentProps;

export type Design = {
    design: 'b2c' | 'web';
};
