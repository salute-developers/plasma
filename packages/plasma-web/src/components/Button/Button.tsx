import styled from 'styled-components';
import { createButton, ButtonRoot } from '@salutejs/plasma-core';
import type {
    ButtonProps as BaseProps,
    ButtonContentProps,
    ButtonSizeProps,
    ButtonViewProps,
} from '@salutejs/plasma-core';

import { applySizes } from './Button.mixins';
import { buttonViews } from './Button.props';
import type { ButtonView } from './Button.props';

export type ButtonProps = BaseProps &
    Partial<ButtonSizeProps> &
    Partial<ButtonViewProps<ButtonView>> &
    ButtonContentProps;

const StyledButtonRoot = styled(ButtonRoot)<Partial<ButtonSizeProps> & Partial<ButtonViewProps<ButtonView>>>`
    ${applySizes}
    ${({ view }) => buttonViews[view]}
`;

/**
 * Кнопка.
 * Поддерживает несколько режимов отображения (`view`) и размеров (`size`).
 */
export const Button = createButton<HTMLButtonElement, ButtonProps>(StyledButtonRoot);

Button.defaultProps = {
    size: 'm',
    view: 'secondary',
    pin: 'square-square',
};
